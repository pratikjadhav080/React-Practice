import '../styles/decisions.css';

export const Decisions = ({props}) => {


    const addrestau = () =>{
        props()
    }

    return <>
        <div id="decisionscontainer">
            <h1 id="decisions">Decisions</h1>

            <div id="startrating">
                <button>Above 4 stars</button>
                <button>Above 3 stars</button>
                <button>Above 2 stars</button>
                <button>Above 1 star</button>
            </div>

            <div id="transaction">
                <button>Cash Only</button>
                <button>Card Only</button>
                <button>All</button>
            </div>

            <div id="sorting">
                <button>Low to high</button>
                <button>High to low</button>
            </div>

            <button id="newrestau" onClick={addrestau}>Add A Restaurant</button>

        </div>
    </>
}