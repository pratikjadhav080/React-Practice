import { Join } from "./components/JoinUs"
import { Settings } from "./components/Settings"
import { Login } from "./components/Login"
import { Contact } from "./components/Contact"
import { Search } from "./components/Search"
import { Help } from "./components/Help"
import { Home } from "./components/Home"
import { Download } from "./components/Download"

import { Common } from "./components/Commonbutton"

function App() {

  let list = [["JOIN US","rgb(0, 183, 255)"], ["SETTINGS","rgb(131, 141, 145)"],["LOGIN","rgb(255, 123, 0)"],["CONTACT US","rgb(145, 24, 9)"],["SEARCH","rgb(164, 211, 55)"],["HELP","rgb(118, 48, 199)"],["HOME","rgb(201, 21, 171)"],["DOWNLOAD","rgb(146, 145, 71)"]]

  let itemList=list.map((item)=>{
    return <Common text={item[0]} background={item[1]} />
  })

  return (
    <div id="allButtons">
      <div className="grid-container">
        <Join />
        <Settings />
        <Login />
        <Contact />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
      <hr></hr>
      <div className="grid-container">
        {itemList}
      </div>

    </div>
  );
}

export default App;
