

export const Transaction = ({prop}) => {

    const array = []

    for (let key in prop){
        if(prop[key]) array.push(key);
    }

    return <>
        <p className="similarfont">Accepts {array.join(", ")} payments {array.length>1?"":"only"}</p>
    </>
}