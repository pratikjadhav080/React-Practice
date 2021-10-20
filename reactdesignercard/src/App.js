import {Card} from "./components/Card"

function App() {

  let list = [["./pepperonipizza.jpg","Pepperoni Pizza", "Premium pepperoni and cheeze is made with real mozzarella on original hand-tossed crust.",265,"12/10/31",53.8,"23.90","29.90",["./fire.png","./flower.png"]],
  ["./tortellini.jpg","Tortellini", "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",270,"18/4/41",42.4,"17.90","22.90",["./leaf.png","./fire.png","./flower.png"]],
  ["./strawberry-cake.jpg","Strawberry Cake", "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer",346,"6/14/49",13.9,"13.90","18.90",["./flower.png"]]]


  let itemList=list.map((item)=>{
    return <Card key={item} item={item} />
  })

  return (
    <div id="maindiv">
      {itemList}
    </div>
  )
}

export default App;
