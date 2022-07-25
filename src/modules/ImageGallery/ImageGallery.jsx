import styles from "./imageGallery.module.css"
import ImageGalleryItem from "modules/ImageGallery/ImageGalleryItem";
import {Component} from "react"
import PropTypes from "prop-types"

class  ImageGallery extends Component {
    render(){
        const {images, onImageClick} = this.props;
        const elements = images.map(item => 
            <ImageGalleryItem onImageClick= {onImageClick} key={item.id} image={item}/>
        )
        return (
            <ul className={styles.ImageGallery}>
                {elements}
            </ul>
        )
    }
}

ImageGallery.defaultProps = {
    images: [],
    onImageClick: ()=>{},
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    onImageClick: PropTypes.func.isRequired,
}

export default ImageGallery;