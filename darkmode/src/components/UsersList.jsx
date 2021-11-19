import '../styles/userlist.css'
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const listData = [{ imgsvg: "Nrupul.svg", barsvg: "greenBar.svg", name: "Nrupul Dev", place: "Bangalore, India", level: 15, points: 4723 },
{ imgsvg: "Sandhya.svg", barsvg: "blueBar.svg", name: "Sandhya", place: "Bangalore, India", level: 11, points: 2339 },
{ imgsvg: "Elon.svg", barsvg: "purpleBar.svg", name: "Elon Tusk", place: "California, USA", level: 6, points: 1884 },
]

export const List = () => {

    const {isDarkMode,toggleTheme} = useContext(ThemeContext)

    return <>
        {listData.map((e) => (
            <div key={e.name} id="listDiv" style={{color:isDarkMode?"#FFFFFF":"#31394D",  borderBottom:isDarkMode?"1px solid #33393F":"1px solid #EBEDF4"}}>

                <div id="small-container">
                    <div id="image">
                        <img src={e.imgsvg} />
                    </div>
                    <div id="details">
                        <p>{e.name}</p>
                        <p>{e.place}</p>
                    </div>
                    <div id="shapediv">
                        <img src="CombinedShape.svg" />
                    </div>
                </div>

                <img id="barsvg" src={e.barsvg} />

                <div id="levelDiv">
                    <p>Professional Level {e.level}</p>
                    <p>{e.points} Points</p>
                </div>

            </div>
        ))}
    </>
}