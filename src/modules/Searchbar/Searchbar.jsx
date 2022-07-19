import styles from "./searchbar.module.css"
import { Component } from "react";
import PropTypes from "prop-types"

class Searchbar extends Component{
    state = {
        search: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {handleSubmit, handleChange } = this;
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
    
                    <input
                    className={styles.SearchFormInput}
                    onChange={handleChange}
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;