import { useSelector, useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { checking, clearErrorMessage, handlerLogin, handlerLogout, handlerLogoutCalendar } from '../store';

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

    const startRegister = async ({ name, email, password }) => {
        dispatch(checking());
        try {

            const { data } = await calendarApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(handlerLogin({
                name: data.name,
                uid: data.uid
            }))

        } catch (error) {

            if (error.response.data.errors) {
                const { response: { data: { errors } } } = error;

                Object.keys(errors).forEach(keyError => {
                    const message = errors[keyError].msg
                    dispatch(handlerLogout(message));
                });
            } else {
                dispatch(handlerLogout(error.response.data?.msg || '---'));
            }

            setTimeout(() => { dispatch(clearErrorMessage()) }, 10)
        }

    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            return dispatch(handlerLogout());
        }

        try {

            const { data } = await calendarApi.get('/auth/renew');

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(handlerLogin({
                name: data.name,
                uid: data.uid
            }));

        } catch (error) {
            localStorage.clear();
            dispatch(handlerLogout());
        }

    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(handlerLogout());
        dispatch(handlerLogoutCalendar());
    }

    return {
        //* Propeties
        status,
        user,
        errorMessage,

        //* Methods
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }

}