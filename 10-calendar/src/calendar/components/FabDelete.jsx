import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {

    const { startDeleteEvent, activeEvent } = useCalendarStore();

    const handlerClickNew = () => {
        startDeleteEvent();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handlerClickNew}
            disabled={!!activeEvent ? false : true}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
