import { useState, useEffect } from 'react';

export const TODO = () => {

  const [data, setData] = useState([])
  const [text, setText] = useState("")
  const [page, setPage] = useState(1)
  const [datacount, setDatacount] = useState(0)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((d) => d.json())
      .then((res) => {
        setDatacount(res.length);
      });
  }, [])

  useEffect(() => {
    getData()
  }, [page])

  async function getData() {
    const res = await fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((d) => d.json()).then(setLoading(false))
    setData(res);
  }

  const handletodo = () => {
    
    if (!text.trim().length) {
      alert("Can not add empty task")
      return;
    };

    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        status: false
      }),

      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => {
      setDatacount(datacount + 1)
      setText("")
      getData()
    })

  }


  return loading?<h1>Loading...</h1>:(
    <div className="App">
      <input value={text} type="text" placeholder="add to do here" onChange={(e) => setText(e.target.value)} />
      <button onClick={handletodo}>Add to do</button>

      {data.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}

      <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)}>prev</button>
      <button disabled={page === Math.ceil(datacount / 3) ? true : false} onClick={() => setPage(page + 1)}>Next</button>

    </div>
  );
}

