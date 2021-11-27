import styles from "./Dishcard.module.css"

export const Dishcards = ({ props }) => {
    return <>
        {props.map((e) => {
            return <div className={styles.Dishcard} >
                <img src={e.strMealThumb} alt="dish" />
                <h1 className={styles.strMeal}>{e.strMeal}</h1>
                <h1 className={styles.strCategory}>Category : {e.strCategory}</h1>
                <h1 className={styles.strArea}>Area : {e.strArea}</h1>
                <br />
                <a className={styles.strYoutube} href={e.strYoutube} target="_blank" rel="noreferrer">Youtube</a>
            </div>
        })}
    </>
}