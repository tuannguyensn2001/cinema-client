import {React, useState} from 'react';
import {Form, Input, Select, DatePicker, Upload, message, Switch, Button} from 'antd';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import EditableTagGroup from "../../../Common/EditableTagGroup";
import style from '../../../../styles/Admin/PageComponent/createfilm.module.css'
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {createFilm} from "../../../../services/FilmService";

function CreateFilm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState([]);
    const [actor, setActor] = useState([]);
    const [category, setCategory] = useState([]);
    const [thumbnail, setThumbnail] = useState('https://files.betacorp.vn/files/media%2fimages%2f2020%2f10%2f16%2fposter-csnm-6-165033-161020-82.jpg');
    const {Option} = Select;
    const [time, setTime] = useState('');
    const [language, setLanguage] = useState('en');
    const [date, setDate] = useState('');
    const [isPublished, setIsPublished] = useState(false);


    const add = type => {
        if (type === 'director')
            return newDirector => {
                setDirector([...director, newDirector]);
            }
        else if (type === 'actor')
            return newActor => {
                setActor([...actor, newActor]);
            }
        else if (type === 'category') {
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
        return isJpgOrPng;

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

    const submitForm = () => {
        const film = {
            name,
            description,
            director: director.join(','),
            actor: actor.join(','),
            category: category.join(','),
            thumbnail,
            time,
            language,
            date,
            'is_active': isPublished,
        }

        createFilm(film)
            .then(data=>console.log(data))
            .catch(err=>console.log(err));

    }


    return (
        <div className={style.main}>
            <div className='row'>
                <div className="col-3 col-sm-3 col-md-3">
                    <div>
                        <Upload
                            width='100%'
                            name='thumbnail'
                            listType='picture-card'
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                        >
                            <PlusOutlined/>
                            <div style={{marginTop: 0}}>Tải lên</div>
                        </Upload>

                        <img src={thumbnail} alt="" width="100%"/>
                    </div>
                </div>
                <div className="col-9 col-sm-9 col-md-9">
                    <Form
                        layout='horizontal'
                        onFinish={submitForm}

                    >
                        <Form.Item
                            label='Tên '
                            name='name'
                        >
                            <Input
                                placeholder='Tên'
                                name='name'
                                onChange={event => {
                                    setName(event.target.value)
                                }}
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
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                }}
                                onBlur={(event, editor) => {
                                }}
                                onFocus={(event, editor) => {
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Đạo diễn'
                            name='director'
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
                                    type='number'
                                    onChange={event => setTime(event.target.value)}
                                />
                                <Select
                                    defaultValue="minutes"
                                    style={{width: 120}}
                                >
                                    <Option value="minutes">Phút</Option>
                                    <Option value="hour">Giờ</Option>
                                </Select>
                            </div>
                        </Form.Item>


                        <Form.Item
                            label='Ngôn ngữ'
                        >
                            <Select defaultValue="en" style={{width: 120}}
                                    onChange={value => setLanguage(value)}
                            >
                                <Option value="en">Tiếng Anh</Option>
                                <Option value="vi">Tiếng Việt</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label='Công chiếu'
                        >
                            <Switch
                                onChange={(checked) => setIsPublished(checked)}
                            />
                        </Form.Item>

                        <Form.Item
                            label='Ngày khởi chiếu'
                        >
                            <DatePicker
                                onChange={(value, string) => setDate(string)}
                                placeholder='Ngày khởi chiếu'
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType='submit'
                                type="primary"
                            >Thêm mới</Button>
                        </Form.Item>


                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreateFilm;