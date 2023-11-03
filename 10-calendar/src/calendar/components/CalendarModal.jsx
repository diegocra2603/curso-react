import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handlerCloseModal = () => {
        console.log('Cerrando Modal')
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handlerCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1>Hola Mundo</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corrupti earum quaerat et beatae iusto tempora ad neque quis animi. Optio iusto reprehenderit soluta aspernatur non facilis rem eius tenetur</p>
        </Modal>
    )
}
