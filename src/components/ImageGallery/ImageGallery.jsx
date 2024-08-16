import ImageItem from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

export default function ImageGallery({ items, openModal }) {
    return (
        <ul className={css.gallery}>
            {items.map((item) => (<li className={css.item} key={item.id}>
                <ImageItem openModal={openModal} data={item} />
        </li>))}
        </ul>)
}