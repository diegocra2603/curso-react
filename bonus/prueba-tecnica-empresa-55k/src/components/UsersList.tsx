import { SortedBy } from "../App"
import { type User } from "../types"

interface Props {
    users: User[]
    showColors: boolean
    deleteUser: (email: string) => void
    changeSorting: (sort: SortedBy) => void
}

export const UsersList = ({ users, showColors, deleteUser, changeSorting }: Props) => {
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th className="pointer" onClick={() => changeSorting(SortedBy.NOMBRE)}>Nombre</th>
                    <th className="pointer" onClick={() => changeSorting(SortedBy.APELLIDO)}>Appelido</th>
                    <th className="pointer" onClick={() => changeSorting(SortedBy.COUNTRY)}>Pais</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody className={showColors ? 'table--showColors' : 'table'}>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.login.uuid}>
                                <td>
                                    <img src={user.picture.thumbnail} />
                                </td>
                                <td>
                                    {user.name.first}
                                </td>
                                <td>
                                    {user.name.last}
                                </td>
                                <td>
                                    {user.location.country}
                                </td>
                                <td>
                                    <button onClick={() => deleteUser(user.login.uuid)} >Borrar</button>
                                </td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    )
}
