import {React, useState} from 'react';
import {TextField} from "@material-ui/core";
import axios from 'axios';

const styleButton = {
    marginTop: '20px',
}



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleFormSubmit = event => {
        event.preventDefault();
        axios.post('http://cinema.com/api/auth/login',{
            email: username,
            password,
        })
            .then(res=>console.log(res))
            .catch(err=>{
                console.log(err);
                console.log("truot");
            });
    }

    const handleInputForm = event => {
        const option = {
            username() {
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
            <form action="" onSubmit={handleFormSubmit} noValidate autoComplete="off">
                <div className="form-group">
                    <TextField
                        label="Tên đăng nhập" variant="filled"
                        value={username}
                        type="text"
                        name="username"
                        id="outlined-basic"
                        className="form-control"
                        onChange={handleInputForm}
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        label="Mật khẩu" variant="filled"
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputForm}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        style={styleButton}
                        type="submit"
                    >Đăng nhập
                    </button>
                </div>
            </form>


        </div>
    )
}

export default Login;
