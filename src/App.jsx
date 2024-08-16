import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageModal from './components/ImageModal/ImageModal'
import { useState, useEffect } from 'react'
import { fetchGallery } from './components/Gallery-api'
import { Toaster } from 'react-hot-toast';
import './App.css'

function App() {
  
  const [search, setSearch] = useState('')
  const [itemGl, setItemGl] = useState([])
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const openModal = data => {
    setIsOpen(true);
    setModalImage(data);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImage({});
  };

  let endGallery = true;
  if (itemGl.length < 12) {
    endGallery = false
  }

  const handleSearche = async (value) => {
    setPage(1)
    setSearch(value);
    setItemGl([]);
  }

  const loadMoreItem = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (search === '') {
      return
    }
    
    async function getGallery() {
      try {
        setError(false)
        setLoader(true)
        const data = await fetchGallery(search, page);
        setItemGl(prevData => {
          return [...prevData, ...data]
        });
      }
      catch (error) {
        setError(true)
      } finally {
        setLoader(false)
      }
      
    }
    getGallery()
  }, [search, page])


  return <>
    <SearchBar onSearch={handleSearche} />
    {itemGl.length > 0 && <ImageGallery openModal={openModal} items={itemGl} />}
    {loader && <Loader />}
    {error &&  <ErrorMessage />}
    {itemGl.length > 0 && endGallery && <LoadMoreButton loadMore={loadMoreItem} />}
    <Toaster />
    <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
  </>
}

export default App
