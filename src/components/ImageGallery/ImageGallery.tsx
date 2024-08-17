import { ItemGl, ModalImage } from "../../types"
import ImageItem from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

interface ImageGalleryProps {
    items:ItemGl[],
    openModal: (data:ModalImage)=>void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
    return (
        <ul className={css.gallery}>
            {items.map((item) => (<li className={css.item} key={item.id}>
                <ImageItem openModal={openModal} data={item} />
        </li>))}
        </ul>)
}
export default ImageGallery;