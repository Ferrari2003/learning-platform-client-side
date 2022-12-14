import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaGoogle } from "react-icons/fa";
import './Register.css'
import { Button, ButtonGroup } from 'react-bootstrap';


const Register = () => {
    const { registerUser } = useContext(AuthContext);

    const {signInWithGoogle} = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name, email, password)

        registerUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user= result.user;
            console.log(user)    
    })
    .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/login'} className="label-text-alt link link-hover">Have an account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        
                         <ButtonGroup className='buttonStyle' vertical>
                            <Button onClick={handleGoogleSignIn} className="mb-2" variant='outline-primary'><FaGoogle></FaGoogle> Google SignIn</Button>
                         </ButtonGroup>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;