import css from './ImageCard.module.css'
import { ImgItem, ModalImage } from '../../types'

interface ImageItemProps {
    data: ImgItem,
    openModal:(data:ModalImage)=>void
}

const ImageItem:React.FC<ImageItemProps> = ({ data, openModal }) => {
    
    return <div className={css.item}>
        <img
            width={400}
            height={300}
            src={data.urls.small}
            alt={data.alt_description}
            onClick={()=>{openModal({src:data.urls.regular, alt:data.alt_description})}}
             />
    </div>

}

export default ImageItem;