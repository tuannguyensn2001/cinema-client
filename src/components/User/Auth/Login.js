import {React, useState} from 'react';
import {Form,Input,Button} from 'antd';
import 'antd/dist/antd.css'
import {attempt,me} from "../../../services/AuthService";
import {useDispatch} from "react-redux";
import {setLogin} from "../../../actions/auth";
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const styleButton = {
    marginTop: '20px',
}

const styleRoot = {
    transition: '.2s ease-in',
}


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleFormSubmit = event => {
        attempt(username,password)
            .then(response => {
                const data = response.data;
                const token = data['access_token'];
                const user = data.user;
                localStorage.setItem('user_token', token);

                dispatch(setLogin(user));

                history.push('/');

            })
            .then(response=>console.log(response))
            .catch(err => {

            });
    }

    const handleInputForm = event => {
        const option = {
            email() {
                setUsername(event.target.value);
            },
            password() {
                setPassword(event.target.value);
            }
        }

        option[event.target.name]();
    }

    return (
        <div>
            <Form
            layout="vertical"
            onFinish={handleFormSubmit}
            name="login"
            >
                <Form.Item
                label="Email"
                >
                    <Input
                    onChange={handleInputForm}
                    name="email"
                    placeholder='Email'
                    prefix={<UserOutlined/>}

                    />
                </Form.Item>

                <Form.Item
                label='Mật khẩu'
                >
                    <Input.Password
                    onChange={handleInputForm}
                    name="password"
                    placeholder='Mật khẩu'
                    prefix={<LockOutlined />}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>


        </div>
    )
}

export default Login;
