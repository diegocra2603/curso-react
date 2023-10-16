import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  const handlerSetUser = () => {
    setUser({
      id: 123,
      name: 'Diego Cruz',
      mail: 'diego@gmail.com'
    })
  }

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>
        {JSON.stringify(user)}
      </pre>
      <button className="btn btn-primary" onClick={ () => handlerSetUser() } >Establecer Usuario</button>
    </>
  )
}
