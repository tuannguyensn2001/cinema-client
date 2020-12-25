import {React} from 'react';
import {Form,Input,Button,DatePicker,Select} from 'antd';
import {UserOutlined,MailOutlined,LockOutlined,PhoneOutlined} from "@ant-design/icons";
import style from '../../../styles/User/Register/register.module.css'



function  Register()
{
    const {Option} = Select;

    const handleChange = value => {
        console.log(value);
    }

    return (
        <div className={style.register}>
            <Form
                layout='vertical'
            >
                <div>
                    <Form.Item
                        label="Họ tên"
                        name='username'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input
                            name="username"
                            placeholder='Họ tên'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name='email'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input
                            name="email"
                            placeholder='Email'
                            prefix={<MailOutlined/>}

                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name='password'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input.Password
                            name="password"
                            placeholder='Mật khẩu'
                            prefix={<LockOutlined/>}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Nhập lại mật khẩu"
                        name='confirmPassword'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input.Password
                            name="confirmPassword"
                            placeholder='Nhập lại mật khẩu'
                            prefix={<LockOutlined/>}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Ngày sinh"
                        name='birthday'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <DatePicker
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Giới tính"
                        name='sex'
                        rules={[
                            {

                            }
                        ]}
                    >
                        <Select defaultValue="default" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="default">Giới tính</Option>
                            <Option value="male">Nam</Option>
                            <Option value="female">Nữ</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Điện thoại"
                        name='phone'
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input
                            name="phone"
                            placeholder='Số điện thoại'
                            prefix={<PhoneOutlined/>}

                        />
                    </Form.Item>



                </div>
                <div className='submit_form'>
                    <button type="submit" className={style.register_button}>
                        Đăng ký
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default Register;