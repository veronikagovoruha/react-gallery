import styles from "./imageGallery.module.css"
import ImageGalleryItem from "modules/ImageGallery/ImageGalleryItem";
import {Component} from "react"

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

export default ImageGallery;