import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {

    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUserList(data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <>
    <button onClick={fetchUsers}>Fetch users</button>
      {
        loading ?
          <h1>Loading Data ...</h1> :
          <h1>The list of users is : </h1>
      }
      <ul>
        {
          userList &&
          userList.map(user => <li key={user.id} style={{ listStyle: "none" }}> {`${user.firstName} ${user.lastName}`} </li>)
        }
      </ul>
    </>
  )
}

export default App
