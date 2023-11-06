import { useSelector, useDispatch } from 'react-redux';
import { calendarApi } from '../api';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        try {
            const response = await calendarApi.post('/auth', { email, password});
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        //* Propeties
        status,
        user,
        errorMessage,

        //* Methods
        startLogin,
    }

}