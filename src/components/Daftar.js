import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Daftar = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value) 
    }

    const klikDaftar = () => {
        const data = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:3001/daftar', data)
        .then(result => {
            console.log(result)
        })
    }

    return (
        <div style={{ marginTop: '170px' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeHolder="Username" className="form-control" value={username} onChange={changeUsername} />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeHolder="Email" className="form-control" value={email} onChange={changeEmail} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" placeHolder="Password" className="form-control" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={changePassword}/>
                                </div>
                                        <button className="btn btn-primary" onClick={klikDaftar}>Daftar</button>{' '}
                                        <Link to="/" className="btn btn-warning">
                                            Batal
                                        </Link>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    )
}

                    export default Daftar