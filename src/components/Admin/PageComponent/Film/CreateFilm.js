import {React} from 'react';
import {Form,Input} from 'antd';

function CreateFilm()
{
    const {TextArea} = Input;


    return (
        <div>
            <div className='row'>
                <div className="col-3 col-sm-3 col-md-3">
                    <img width='100%' src="https://files.betacorp.vn/files/media%2fimages%2f2020%2f10%2f16%2fposter-csnm-6-165033-161020-82.jpg" alt=""/>
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
                            <TextArea
                                placeholder='Mô tả'
                                name='description'
                                rows={5}
                            />
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreateFilm;