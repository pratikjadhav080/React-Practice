export const Todolist = ({passlist,toggle}) => {

    console.log({passlist})

    return (
        <div>
            {passlist.map((e) => (
                <>
                <p key={e.id}>{e.title}-{e.status?"true":"false"}</p>
                <button onClick={()=>toggle(e.id,e.title)}>Click here</button>
                </>
            ))}
        </div>
    )
}