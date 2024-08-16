import { Formik } from "formik";
import React from "react";
import useLogin from "../../hooks/useLogin"
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const { handleSubmitLogin } = useLogin();

    return (
        <div className='main'>
            <div className="input">
                <h2>Login</h2>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validate={values => {
                        const errors = { username: '', password: '' };
                        if (!values.username)
                            errors.username = 'Required';
                        else if (!values.password)
                            errors.password = 'Required';
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmitLogin(values);
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
                        <form className="form" onSubmit={(e) => { e.preventDefault(); handleSubmitLogin(values); }}>
                            <label>Username</label>
                            <input
                                type="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                style={errors.username === 'Required' && touched.username ? { borderColor: "red" } : {}}
                            />
                            <p style={{ visibility: `${errors.username && touched.username && errors.username ? "visible" : "hidden"}` }}>{errors.username}</p>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={errors.password === 'Required' && touched.password ? { borderColor: "red" } : {}}
                            />
                            <p style={{ visibility: `${errors.password && touched.password && errors.password ? "visible" : "hidden"}` }}>{errors.password}</p>
                            <button type="submit" disabled={(values.username === '') || (values.password === '')}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
                <p>Don't have a account yet? <Link to="/register">Sign Up!</Link></p>
            </div>
        </div>

    )
}

export default Login;