import css from './LoadMoreBtn.module.css'

interface LoadMoreButtonProps {
    loadMore:()=>void
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ loadMore }) => {
    return <button className={css.btn} type="button" onClick={loadMore}>Load More</button>
}

export default LoadMoreButton;