import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', 
        zIndex: 999,
    },
    content: {
        top: '10%', 
        left: '10%', 
        border: 'none', 
        background: 'transparent', 
        overflow: 'hidden', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: '999',
},
};

export default function ImageModal({modalIsOpen, closeModal, src, alt}) {
    return <> <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Fullscreen image"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
    >
        <img src={src} alt={alt} />
    </Modal>
    </>
}