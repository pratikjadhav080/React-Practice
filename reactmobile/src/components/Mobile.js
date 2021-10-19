function Mobile({list,name}) {

    let dynamic = name.split(" ").join("")

    let itemList=list.map((item)=>{
        return <li key={item}>{item}</li>
      })

    return (
    <div>
        <h1>{name}</h1>
        <div>
            <ul id = {dynamic}>
                {itemList}
            </ul>
        </div>
    </div>
    );
}



export { Mobile };