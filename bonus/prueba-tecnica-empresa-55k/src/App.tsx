import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { User} from './types'

export enum SortedBy {
  NONE = '',
  NOMBRE = 'name',
  APELLIDO = 'apellido',
  COUNTRY = 'country',
}

function App() {

  const [users, setusers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortedBy>(SortedBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  const toogleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByContry = () => {
    const newSortingValue = sorting === SortedBy.NONE ? SortedBy.COUNTRY : SortedBy.NONE;
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setusers(originalUsers.current)
  }

  useEffect(() => {

    fetch('https://randomuser.me/api?results=100')
      .then(res => res.json())
      .then(res => {
        setusers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })

  }, [])

  const filteredUsers = useMemo(() => {
    return typeof (filterCountry) === 'string' && filterCountry.length > 0 ? users.filter((user) => {
      return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    }) : users
  }, [users, filterCountry])

  const sortUsers = useMemo(() => {

    if (sorting === SortedBy.NONE) return filteredUsers

    const comparteProperties : Record<string, (user: User) => any> = {
      [SortedBy.COUNTRY] : user => user.location.country,
      [SortedBy.NOMBRE] : user => user.name.first,
      [SortedBy.APELLIDO] : user => user.name.last,
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = comparteProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })

  }, [filteredUsers, sorting])

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setusers(filteredUsers)
  }

  const handleChangeSort = (sort:SortedBy) => {
    setSorting(sort)
  }

  return (
    <div className='App'>
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toogleColors}>
          {showColors ? 'Descolorear Filas' : 'Colorear Filas'}
        </button>
        <button onClick={toogleSortByContry}>
          { sorting === SortedBy.COUNTRY ? 'Ordenar Por Pais' : 'Desordenar Por Pais'}
        </button>
        <button onClick={handleReset} >Resetear</button>
        <input type="text" placeholder='Filtrar por pais...' onChange={(e) => {
          setFilterCountry(e.target.value)
        }} value={filterCountry! ?? ''} />
      </header>
      <main>
        <UsersList
          deleteUser={handleDelete}
          users={sortUsers}
          showColors={showColors}
          changeSorting={handleChangeSort}
           />
      </main>
    </div>
  )
}

export default App
