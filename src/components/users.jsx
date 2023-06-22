import { useParams } from 'react-router-dom';

const  Users = () => {
  let params = useParams();
  return(
    <div>        
      <h1>Usuarios</h1>
      <h2>{params.id}</h2>
    </div>
  )
}
export default Users;
