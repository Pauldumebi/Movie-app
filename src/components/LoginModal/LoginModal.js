import { Modal } from 'react-bootstrap';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Textfield/TextField";
import './LoginModal.css'

const LoginModal = (props) => {
    
    const validate = Yup.object({
		email: Yup.string()
			.email("Email is invalid")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
	});
    return (
        <Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
				}
			}
		>
            <div>
                <Modal {...props} centered className="login-modal">
                    <Modal.Header closeButton className="modal-login-img">
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="text-center">Login to experience movies like never before</h5>
                        <Form>
                            <div className="">
                                <Input
                                    name="email"
                                    id="form-input"
                                    type="email"
                                    placeholder="Please enter your email"
                                />
                            </div>
                            <div className="">
                                <Input
                                    name="password"
                                    type="password"
                                    id="form-input"
                                    placeholder="Please enter your password"
                                />
                            </div>
                            <button
                                className="mt-4 signup-btn mb-4"
                                type="submit"
                            >
                                Login
                            </button>
                        </Form>   
                    </Modal.Body>
                </Modal>
            </div>
        </Formik>
    )
}

export default LoginModal
