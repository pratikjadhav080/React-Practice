type TodoInputProps={
    title:string;
}

export const TodoInput = ({title}:TodoInputProps) =>{
    return (
        <div className="todoitems">
            <h3>{title}</h3>
        </div>
    )
}