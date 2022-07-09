import styles from "./imageGalleryItem.module.css"
import PropTypes from "prop-types"

const ImageGalleryItem = ({ image, onImageClick }) => {
    const {id, webformatURL, largeImageURL} = image;
    return (
        <li key={id} className={styles.ImageGalleryItem}>
            <img onClick={() => onImageClick({largeImageURL})} src={webformatURL} className={styles.ImageGalleryItemImage} alt="" />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    image:
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired
        })
}

export default ImageGalleryItem;
