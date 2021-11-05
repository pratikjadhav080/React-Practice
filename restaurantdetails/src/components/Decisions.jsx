import '../styles/decisions.css';

export const Decisions = ({ props, rate, paytype,sorted}) => {

    const stars = [4, 3, 2, 1]
    const paymenttypes = ["cash", "card", "all"]

    const addrestau = () => {
        props()
    }

    const ratings = (e) => {
        rate(e)
    }

    const selectpayment = (e) => {
        paytype(e)
    }

    const sortCondition = (e) => {
        sorted(e)
    }

    return <>
        <div id="decisionscontainer">
            <h1 id="decisions">Decisions</h1>

            <div id="startrating">
                {stars.map((e) => {
                    return <button onClick={() => { ratings(e) }}>Above {e} star</button>
                })}
            </div>

            <div id="transaction">
                {paymenttypes.map((e) => {
                    return <button onClick={() => { selectpayment(e) }}>{e.toUpperCase()}</button>
                })}
            </div>

            <div id="sorting">
                <button onClick={() => { sortCondition(1) }}>Low to high</button>
                <button onClick={() => { sortCondition(-1) }}>High to low</button>
            </div>

            <button id="newrestau" onClick={addrestau}>Add A Restaurant</button>

        </div>
    </>
}