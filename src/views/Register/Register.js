import {Fragment} from 'react';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Textfield/TextField";
import './Register.css'
import {Link, useHistory} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Register = () => {
    toast.configure();
    const history = useHistory();

    //Success message for toast
    const notify = (msg) =>
		toast.success(msg, {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 3000,
		});

    //Error message for toast
	const errorStuff = () =>
		toast.error("failed to signup please try again", {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 3000,
		});
    
    //formik validation
    const validate = Yup.object({
		first_name: Yup.string()
			.max(34, "Must be 30 characters or less")
			.required("Name is Required"),
        last_name: Yup.string()
			.max(34, "Must be 30 characters or less")
			.required("Name is Required"),
		email: Yup.string()
			.email("Email is invalid")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
	});
    
    //setting the headers for post request
    const headers = {
        'Content-Type': 'application/json',
    }

    return (
		<Formik
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
                axios
                    .post(
                        "https://afternoon-ridge-35420.herokuapp.com/https://dumebi-movie-app-api.herokuapp.com/api/v1/signup",
                        values, {
                            headers: headers
                        }
                    )
                    .then((res) => {
                        console.log(res)
                        if (res) {
                            notify(res.data.message)
                            history.push("/login");
                        } 
                    })
                    .catch(function (error) {
                        errorStuff()
                        console.log(error);
                    });
            }}
		>
			{(formik) => (
				<Fragment>
                    <Row>
                        <Col sm={4}>
                        <div className="register-img-side register-background"></div>
                        </Col>
                        <Col sm={8}>
                            <div>
                                <div className="have-account">Already have an account? <Link to="/login"> Login</Link></div>
                            </div>
                            <main>
                                <div className="auth-form pt-5">
                                    <h3 className="pb-5">Sign up to get Latest Movies</h3>
                                    <Form>
                                        <div className="mb-4">
                                            <Input
                                                label="First Name"
                                                name="first_name"
                                                type="text"
                                                placeholder="Please enter your first name"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <Input
                                                label="Last Name"
                                                name="last_name"
                                                type="text"
                                                placeholder="Please enter your last name"
                                            />
                                        </div>
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
                                            className="mt-3 signup-btn"
                                            type="submit"
                                        >
                                            Sign Up
                                        </button>
                                    </Form>   
                                                        
                                </div>
                            </main>
                        </Col>
                    </Row>
				</Fragment>
			)}
		</Formik>
    );
}

export default Register
