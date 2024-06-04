import useList from "../../hooks/useList";

const List: React.FC = () => {
    const {toDoList, removeItem, setModal} = useList();

    return(
        <>
            <h2>List</h2>
            <table className="table">
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
                            <button onClick={() => setModal(item.itemid)}>edit</button> - <button onClick={() => removeItem(item.itemid)}>delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => {localStorage.removeItem("token"); window.location.reload();}}>Exit</button>
            <button onClick={() => setModal(true)}>New</button>
        </>
    )
}

export default List;