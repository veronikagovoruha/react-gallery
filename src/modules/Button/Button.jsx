import styles from "./button.module.css"

const Button = ({onClick}) =>{
    return (
        <div className={styles.Box}>
            <button className={styles.Button} onClick={onClick}>Load more</button>
        </div>
    )
}

export default Button;