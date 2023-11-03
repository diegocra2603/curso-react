import { differenceInSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'

export const useModalForm = (initialForm) => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [formValues, setFormValues] = useState({ ...initialForm });

    useEffect(() => {

        if (initialForm !== null) {
            setFormValues({ ...initialForm })
        }

    }, [initialForm])

    const titleClass = useMemo(() => {

        if (!formSubmitted) {
            return '';
        }

        return (formValues.title.length > 0) ? '' : 'is-invalid'

    }, [formValues.title, formSubmitted])

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

        if (formValues.title.length === 0) {
            return;
        }

        console.log(formValues);

        //TODO:

    }

    return {
        formValues,
        titleClass,
        handlerChange,
        handlerChangeDate,
        handlerSubmit
    }
}