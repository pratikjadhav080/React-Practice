
export const Todoitem = ({ list,del,strike }) => {


    return list.map((item,index) => {
        return (
            <tr key={item}>
                <td>{item}</td>
                <td className='operation'>
                    <button id="donebtn" onClick={() => strike(index)}>Done</button>
                    <button id="donebtn" onClick={() => del(index)}>Delete</button>
                </td>
            </tr>
        )
    })

}




