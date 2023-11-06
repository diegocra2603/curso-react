import { useSelector, useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { checking, clearErrorMessage, handlerLogin, handlerLogout } from '../store';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(checking());
        try {

            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(handlerLogin({
                name: data.name,
                uid: data.uid
            }))

        } catch (error) {
            dispatch(handlerLogout('Credenciales incorrectas'));
            setTimeout(() => { dispatch(clearErrorMessage()) }, 10)
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