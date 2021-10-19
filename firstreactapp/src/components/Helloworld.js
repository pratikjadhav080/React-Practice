
import './button.css';

function Hello({a,b}){
    return (
    <div>
        My name is {b} with number {a}
        <input type="text"/>
        <button id="button">Clickme</button>
        <h1 id="colors">hello</h1>
        <p>Paragraph</p>
    </div>
    );
}



export { Hello };