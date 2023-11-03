import { useDispatch, useSelector } from "react-redux"
import { handlerOpenDateModal, handlerCloseDateModal } from "../store";

export const useUiStore = () => {

    const { isDateModalOpen } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const openDateModal = () => {
        dispatch(handlerOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch(handlerCloseDateModal());
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }

    return {
        // Properties
        isDateModalOpen,

        // Methods
        openDateModal,
        closeDateModal,
        toggleDateModal
    }

}