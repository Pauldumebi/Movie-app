import {useEffect, Fragment} from 'react';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Textfield/TextField";
import './Register.css'
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import { signupUser, userSelector, clearState } from '../../features/UserSlice';
import toast from 'react-hot-toast';

const Register = () => {

    // const dispatch = useDispatch();
    // const { isSuccess, isError, errorMessage } = useSelector(
    //     userSelector
    // )

  
    // useEffect(() => {
    //     if (isSuccess) {
    //       dispatch(clearState());
    //     }
    //     if (isError) {
    //       toast.error(errorMessage);
    //       dispatch(clearState());
    //     }
    //   }, [isSuccess, isError]);

    const validate = Yup.object({
		Name: Yup.string()
			.max(34, "Must be 30 characters or less")
			.required("Name is Required"),
		email: Yup.string()
			.email("Email is invalid")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password must match")
			.required("Confirm password is required"),
	});
    
      return (
        // <Provider>
		<Formik
			initialValues={{
				Name: "",
				email: "",
				password: "",
				confirmPassword: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
                // dispatch(signupUser(values));
				}
			}
		>
			{(formik) => (
				<Fragment>
                    <Row>
                        <Col sm={4}>
                        <div className="register-img-side register-background"></div>
                        </Col>
                        <Col sm={8}>
                            <div>
                                <div className="have-account">Already have an account? <Link to="/login"> Sign In</Link></div>
                            </div>
                            <main>
                                <div className="auth-form pt-5">
                                    <h3 className="pb-5">Sign up to get Latest Movies</h3>
                                    <Form>
                                        <div className="mb-4">
                                            <Input
                                                label="Name"
                                                name="Name"
                                                type="text"
                                                placeholder="Please enter your name"
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
                                        <div className="mb-4">
                                            <Input
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                type="password"
                                                id="form-input"
                                                placeholder="Please confirm your password"
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
        // </Provider>
    );
}

export default Register
