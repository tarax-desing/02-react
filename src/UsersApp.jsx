import { useState } from 'react'
import { UsersList } from './componentes/UsersList'

export const UsersApp = () => {
    
    const [url, setUrl] = useState('users')
    const handleFecht = ()=> {
        url === 'users'? setUrl('comments') : setUrl('users')
    }
  return (
    <>
    <h1>Listado de Datos</h1>
    <button onClick={handleFecht}>
        {url === 'users'? ' Mostrar comentarios': 'Mostrar usuarios'}
    </button>
    <UsersList url={url}/>
    </>
  )
}
