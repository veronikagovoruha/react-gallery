import styles from "./button.module.css"
import PropTypes from "prop-types"

const Button = ({onClick, buttonText}) =>{
    return (
        <div className={styles.Box}>
            <button className={styles.Button} onClick={onClick}>{buttonText}</button>
        </div>
    )
}


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
}

export default Button;