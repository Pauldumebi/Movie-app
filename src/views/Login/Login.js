import React from 'react'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Textfield/TextField";
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Login = () => {

    const history = useHistory();

    const notify = (msg) =>
		toast.success(msg, {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 5000,
		});
	const errorStuff = () =>
		toast.error("failed to signup please try again", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 5000,
		});
    
    const validate = Yup.object({
		email: Yup.string()
			.email("Email is invalid")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
	});

    const headers = {
        'Content-Type': 'application/json',
    }
    
    return (
        <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
            console.log(values);
            axios
            .post(
                "https://afternoon-ridge-35420.herokuapp.com/https://dumebi-movie-app-api.herokuapp.com/api/v1/login", 
                values, {
                    headers: headers
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    notify(res.data.message)
                    localStorage.setItem('name', JSON.stringify(res.data.data.first_name));
                    history.push("/");
                } 
            })
            .catch(function (error) {
                errorStuff()
                console.log(error);
            });
            }
        }
    >
        {(formik) => (
            <div>
                <Row>
                    <Col sm={4}>
                    <div className="Login-img-side Login-background"></div>
                    </Col>
                    <Col sm={8}>
                        <div>
                            <div className="no-account">Don't have an account? <Link to="/register">Sign Up</Link></div>
                        </div>
                        <main>
                            <div className="Login-form pt-5">
                                <h3 className="pb-5">Welcome back</h3>
                                <Form>
                                    <div className="mb-4">
                                        <Input
                                            label="Email"
                                            name="email"
                                            id="form-input"
                                            type="email"
                                            placeholder="Please enter your email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Input
                                            label="Password"
                                            name="password"
                                            type="password"
                                            id="form-input"
                                            placeholder="Please enter your password"
                                        />
                                    </div>
                                    <button
                                        className="mt-3 Login-btn"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </Form>   
                                                    
                            </div>
                        </main>
                    </Col>
                </Row>
            </div>
        )}
    </Formik>
    )
}

export default Login
