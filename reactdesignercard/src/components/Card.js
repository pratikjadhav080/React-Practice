const Card = ({item}) =>{

    let list = item[8]

    let itemList=list.map((item)=>{
        return <img alt="img" key={item} src={item}></img>
      })

    return (
        <div>
            <div><img alt="images" src={item[0]}></img></div>
            <div id="dishdetails">
                <div>
                    <h1 id="dishname">{item[1]}</h1>
                    <div id="symbols">{itemList}</div>
                </div>
                <p>{item[2]}</p>
                <div>
                    <p>{item[3]} Cal</p>
                    <p>P/F/C: {item[4]}</p>
                    <p>{item[5]} <span>&#176;</span>C</p>
                </div>
                <div>
                    <h1 id="price">${item[6]}</h1>
                    <h2 id="notprice"><strike>${item[7]}</strike></h2>
                    <button id="btn">ORDER</button>
                </div>
                
            </div>
        </div>
    )
}

export {Card} ;