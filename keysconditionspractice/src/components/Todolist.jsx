export const Todolist = ({passlist,toggle}) => {

    return (
        <div>
            {passlist.map((e) => (
                <>
                <p key={e.id}>{e.title}-{e.status?"Done":"Not Done"}</p>
                <button onClick={()=>toggle(e.id)}>Click here</button>
                </>
            ))}
        </div>
    )
}