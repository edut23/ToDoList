import { Formik } from "formik";
import useModal from "../../hooks/useModal";
import { useMyContext } from "../../context/myContext";

interface ModalProps{
    show: boolean | number
}

const Modal: React.FC<ModalProps> = (show) => {
    const {createItem, updateItem} = useModal(show.show);
    const {setModal} = useMyContext();

    return(
        <div className="modal" style={show.show ? {} :  {display: "none"}}>
            <div className="modalView">
                <h2>Create or edit ToDo</h2>
                <Formik
                initialValues={{ title: '', description: '', status: '' }}
                validate={values => {
                    const errors = {title: '', description: '', status: '' };
                    if (!values.title)
                        errors.title = 'Required';
                    else if (!values.description)
                        errors.description = 'Required';
                    else if (!values.status)
                        errors.status = 'Required';
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    /* and other goodies */
                }) => (
                <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="title"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    style={errors.title === 'Required' ? {borderColor: "red"} : {}}
                                />
                            </td>
                            <td>
                                <input
                                    type="description"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    style={errors.description === 'Required' ? {borderColor: "red"} : {}}
                                />
                            </td>
                            <td>
                                <select
                                    name="status"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.status}
                                    style={errors.status === 'Required' ? {borderColor: "red"} : {}}
                                >
                                    <option value="To do">To do</option>
                                    <option value="doing">Doing</option>
                                    <option value="done">Done</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={() => setModal(false)}>Cancel</button>
                    <button 
                        onClick={() => typeof show.show === 'number' ? 
                            updateItem({...values, creation: (new Date().valueOf() / 1000).toString()}) :
                            createItem({...values, creation: (new Date().valueOf() / 1000).toString()})
                        } 
                        disabled={(values.title === '') || (values.description === '') || (values.status === '')}
                    >
                            Save
                    </button>
                </div>
                </>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default Modal;