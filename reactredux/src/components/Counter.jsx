import { useDispatch, useSelector } from 'react-redux';
import { DEC_COUNT, INC_COUNT } from '../Store/CounterStore/actionTypes';
import { Actions } from '../Store/CounterStore/actions';

//useDispatch in react-redux is equivalent to store.dispatch from Redux

//useSelector can be used for getting things/value/entity that is maintained in the store...
//if we are not using callback function inside useSelector, it will get everything from the store..
//if we want to get a specific thing from the store we have to use a callback function and get that particular value, like store.count
// the reason why we shud selectively get things from store is because if we get everything from the store and lets say anything in the store is changing it will re-render the component which is not needed
//what we want is to render only when particular thing from the store is changed
// here we are using count in order to show it on UI
// so it is better we only get count from the store, this will not make re-render the component if any other thing/value/entity in the store changes

export const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(store=>store.counter.count);

    return <div>
        <h1>Counter:{count}</h1>

        <button onClick={() => {
            dispatch(Actions(INC_COUNT, 1))
        }} >Increment</button>

        <button onClick={() => {
            dispatch(Actions(DEC_COUNT, 1))
        }} >Decrement</button>

    </div>
}