import useList from "../../hooks/useList";

const List: React.FC = () => {
    const {toDoList, removeItem, setModal} = useList();

    return(
        <div className="notesDiv">
            <div className="createNote">
                <h2>Título</h2>
                <hr/>
                <h3>Criar nota...</h3>
            </div>
            <h2>List</h2>
            <table className="table min40vw">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Last update</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoList.map((item) => (
                    <tr key={item.itemid}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.status}</td>
                        <td>{new Date(item.creation).toLocaleString('pt-br')}</td>
                        <td>
                            <button onClick={() => setModal(item.itemid)}>Edit</button><button onClick={() => removeItem(item.itemid)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => {localStorage.removeItem("token"); window.location.reload();}}>Exit</button>
            <button onClick={() => setModal(true)}>New</button>
        </div>
    )
}

export default List;