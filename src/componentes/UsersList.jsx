import {useFetchData} from "../hooks/useFetchData"

export const UsersList = ({url}) => {
    const {data, loading} = useFetchData({url})
  return (
    <>
    <ul>

    {loading ? <p>Cargando ...</p>:
    url === 'users'?
    data.map(user =>

<li key ={user.id}>
 <p>Nombre:{user.name} Email:{user.email}</p> 
 <span>Telefono:{user.phone}</span>
</li> )
: data.map(comment =>
<li key={comment.id}>
<p>Nombre: {comment.name}</p>
<span>comentario:{comment.body}</span> <br />
<span>Email:{comment.email}</span>
</li>
)    }
</ul>
</>
  )
}
