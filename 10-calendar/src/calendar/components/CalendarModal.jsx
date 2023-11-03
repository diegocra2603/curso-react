import { useMemo, useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'

registerLocale('es', es)

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

    const [isOpen, setIsOpen] = useState(true);

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [formValues, setFormValues] = useState({
        titulo: 'Diego',
        notes: 'Apellido Cruz',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const titleClass = useMemo(() => {

        if (!formSubmitted) {
            return '';
        }

        return (formValues.titulo.length > 0) ? '' : 'is-invalid'

    }, [formValues.titulo, formSubmitted])

    const handlerCloseModal = () => {
        console.log('Cerrando Modal');
        setIsOpen(false);
    }

    const handlerChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handlerChangeDate = (e, changin) => {
        setFormValues({
            ...formValues,
            [changin]: e
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);

        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas Incorrectas', 'Revisar las fechas ingresadas', 'error')
            return;
        }

        if (formValues.titulo.length === 0) {
            return;
        }

        console.log(formValues);

        //TODO:


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
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container d-flex flex-column gap-2" onSubmit={handlerSubmit}>

                <div className="form-group d-flex flex-column">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        className="form-control"
                        onChange={(e) => handlerChangeDate(e, 'start')}
                        dateFormat="Pp"
                        locale='es'
                        timeInputLabel="Hora"
                        showTimeInput
                    />
                </div>

                <div className="form-group d-flex flex-column">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        className="form-control"
                        onChange={(e) => handlerChangeDate(e, 'end')}
                        dateFormat="Pp"
                        locale='es'
                        timeInputLabel="Hora"
                        showTimeInput
                    />
                </div>

                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="titulo"
                        autoComplete="off"
                        value={formValues.titulo}
                        onChange={handlerChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={handlerChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
