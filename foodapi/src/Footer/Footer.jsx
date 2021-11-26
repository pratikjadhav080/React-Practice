import styles from "./Footer.module.css"

export const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.footer_container}>
            <div>
                <img src="./icons/mylogo.svg" alt="mylogo"/>
            </div>
            <div>
                <p>© 2021 Pratik Jadhav. All rights are reserved.</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/pratik-r-jadhav-70407b208/" target="_blank" rel="noreferrer"><img src="./icons/linkedin.svg" alt="linkedin"></img></a>
                <a href="https://github.com/pratikjadhav080" target="_blank" rel="noreferrer"><img src="./icons/Githublogo.svg" alt="Githublogo"></img></a>
                <a href="https://medium.com/@pratikjadhav080" target="_blank" rel="noreferrer"><img src="./icons/Medium.svg" alt="Medium"></img></a>
            </div>
        </div>
    </div>
}