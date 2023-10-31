import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }))
        }

        dispatch(login(result))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await registerUserWithEmailPassword({ email, password, displayName })

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }))
        }

        dispatch(login(result))
    }
}

export const startLoginUserWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await loginWithEmailAndPassword({ email, password })

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }))
        }

        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()

        dispatch(logout())
    }
}