import { Formik } from "formik";
import React from "react";
import useRegister from "../../hooks/useRegister";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    const { handleSubmitRegister } = useRegister();

    return(
        <div className="input">
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {username: '', password: ''};
                    if (!values.username)
                        errors.username = 'Required';
                    else if (!values.password)
                        errors.password = 'Required';
                    else if (values.password.length < 6)
                        errors.password = 'Minimum 6 characters'
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmitRegister(values);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                }) => (
                    <form className="form" onSubmit={(e) => { e.preventDefault(); handleSubmitRegister(values); }}>
                    <label>Username</label>
                    <input
                        type="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    <p style={{visibility: `${errors.username && touched.username && errors.username ? "visible" : "hidden"}`}}>{errors.username}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <p style={{visibility: `${errors.password && touched.password && errors.password ? "visible" : "hidden"}`}}>{errors.password}</p>
                    <button type="submit" disabled={(values.username === '') || (values.password === '') || (errors.password !== '')}>
                        Submit
                    </button>
                    </form>
                )}
            </Formik>
            <p>Already have a account? <Link to="/">Login here!</Link></p>
        </div>
    )
}

export default Register;