

export const Dishecards = ({ props }) => {
    return <>
        {props.map((e) => {
            return <div>
                <h1>{e.strMeal}</h1>
                <h1>{e.strCategory}</h1>
                <h1>{e.strArea}</h1>
                <img src={e.strMealThumb} alt="dish"/>
                <a href={e.strYoutube} target="_blank" rel="noreferrer">Click here to watch on youtube</a>
            </div>
        })}
    </>
}