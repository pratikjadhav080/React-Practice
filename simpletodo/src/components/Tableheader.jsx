export const Renderheader = () => {
    let header = ['Tasks', 'Opeartion']

    return header.map((key, index) => {
        return <th id={key} key={index}>{key.toUpperCase()}</th>
    })
}