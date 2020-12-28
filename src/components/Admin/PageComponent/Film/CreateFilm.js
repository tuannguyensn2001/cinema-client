import {React, useState} from 'react';
import {Form, Input,Select,DatePicker,Upload,message} from 'antd';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import EditableTagGroup from "../../../Common/EditableTagGroup";
import style from '../../../../styles/Admin/PageComponent/createfilm.module.css'
import {LoadingOutlined,PlusOutlined} from "@ant-design/icons";

function CreateFilm() {
    const [director, setDirector] = useState([]);
    const [actor, setActor] = useState([]);
    const [category,setCategory] = useState([]);
    const {Option} = Select;


    const add = type => {
        if (type === 'director')
            return newDirector => {
                setDirector([...director, newDirector]);
            }
        else if (type === 'actor')
            return newActor => {
                setActor([...actor, newActor]);
            }
        else if (type === 'category'){
            return newCategory => {
                setCategory([...category, newCategory]);
            }
        }

    }

    const beforeUpload = file => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('Bạn chỉ được phép tải ảnh dạng PNG/JPG!');
            }
            return isJpgOrPng ;

    }

    const remove = type => {
        if (type === 'director')
            return removeDirector => {
                setDirector(director.filter(director => director !== removeDirector))
            }
        else if (type === 'actor')
            return removeActor => {
                setActor(actor.filter(actor => director !== removeActor))
            }
        else if (type === 'category')
            return removeCategory => {
                setCategory(category.filter(category => category !== removeCategory));
            }
    }


    return (
        <div className={style.main}>
            <div className='row'>
                <div className="col-3 col-sm-3 col-md-3">
                    <div>
                        <Upload
                        name='thumbnail'
                        listType='picture-card'
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        >
                            <PlusOutlined/>
                            <div style={{ marginTop: 0 }}>Tải lên</div>

                        </Upload>
                    </div>
                </div>
                <div className="col-9 col-sm-9 col-md-9">
                    <Form
                        layout='horizontal'
                    >
                        <Form.Item
                            label='Tên '
                        >
                            <Input
                                placeholder='Tên'
                                name='name'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Mô tả'
                        >

                            <CKEditor
                                editor={ClassicEditor}
                                data=''
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({event, editor, data});
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Đạo diễn'
                        >
                            <EditableTagGroup
                                tags={director}
                                handleClose={remove('director')}
                                handleSubmit={add('director')}
                                content='Thêm đạo diễn'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Diễn viên'
                        >
                            <EditableTagGroup
                                tags={actor}
                                handleClose={remove('actor')}
                                handleSubmit={add('actor')}
                                content='Thêm diễn viên'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Thể loại'
                        >
                            <EditableTagGroup
                                tags={category}
                                handleClose={remove('category')}
                                handleSubmit={add('category')}
                                content='Thêm thể loại'
                            />
                        </Form.Item>

                        <Form.Item
                            label='Thời lượng'
                        >
                           <div className='d-flex'>
                               <Input
                                   placeholder='Thời lượng'
                                   name='time'
                               />
                               <Select defaultValue="minutes" style={{ width: 120 }}>
                                   <Option value="minutes">Phút</Option>
                                   <Option value="hour">Giờ</Option>
                               </Select>
                           </div>
                        </Form.Item>


                        <Form.Item
                            label='Ngôn ngữ'
                        >
                            <Select defaultValue="en" style={{ width: 120 }}>
                                <Option value="en">Tiếng Anh</Option>
                                <Option value="vi">Tiếng Việt</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label='Ngày khởi chiếu'
                        >
                           <DatePicker
                           placeholder='Ngày khởi chiếu'
                           />
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreateFilm;