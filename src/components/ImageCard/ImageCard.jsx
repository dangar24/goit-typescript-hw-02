import css from './ImageCard.module.css'

export default function ImageItem({ data, openModal }) {
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