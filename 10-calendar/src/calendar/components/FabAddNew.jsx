import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();

    const { setActiveEvent } = useCalendarStore()

    const handlerClickNew = () => {

        setActiveEvent({
            _id: 0,
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: 1234,
                name: 'Diego'
            }
        });

        openDateModal();

    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handlerClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
