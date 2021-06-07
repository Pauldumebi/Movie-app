import { Modal } from 'react-bootstrap';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Input } from "../Textfield/TextField";
import './SignupModal.css'


const SignupModal = (props) => {
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
				}
			}
		>
            <div>
                <Modal {...props} className="signup-modal">
                    <Modal.Header closeButton className="modal-signup-img">
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="">
                                <Input
                                    // label="Name"
                                    name="Name"
                                    type="text"
                                    placeholder="Please enter your name"
                                />
                            </div>
                            <div className="">
                                <Input
                                    // label="Email"
                                    name="email"
                                    id="form-input"
                                    type="email"
                                    placeholder="Please enter your email"
                                />
                            </div>
                            <div className="">
                                <Input
                                    // label="Password"
                                    name="password"
                                    type="password"
                                    id="form-input"
                                    placeholder="Please enter your password"
                                />
                            </div>
                            <div className="">
                                <Input
                                    // label="Confirm Password"
                                    name="confirmPassword"
                                    type="password"
                                    id="form-input"
                                    placeholder="Please confirm your password"
                                />
                            </div>
                            <button
                                className="mt-4 signup-btn mb-4"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </Form>   
                    </Modal.Body>
                </Modal>
            </div>
        </Formik>
    )
}

export default SignupModal
