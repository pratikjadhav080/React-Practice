

export const Todolist = ({ passlist, toggle, deleteTask,attr }) => {

    const handletoggle = (id) => {
        toggle(id)
    }

    const handledelete = (id) => {
        deleteTask(id)
    }

    return <>
        {passlist.map((e) => (
            <div key={e.id} id={attr}>
                <div>
                    <p>{e.status ? <strike>{e.title}</strike> : e.title}</p>
                </div>
                <div>
                    <input type="checkbox" checked={e.status} onChange={() => handletoggle(e.id)} />
                    <button onClick={() => handledelete(e.id)}>X</button>
                </div>
            </div>
        ))}
    </>
}