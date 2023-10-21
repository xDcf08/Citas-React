const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal fixed inset-0 bg-black opacity-75"></div>
        <div className="modal-container relative p-4 bg-white w-96 rounded-lg shadow-lg">
          <span className="close absolute top-0 right-0 m-2 text-xl cursor-pointer" onClick={closeModal}>&times;</span>
          {children}
        </div>
    </div>
    );
  };
  
  export default Modal;