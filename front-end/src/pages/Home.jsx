import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AppNav from '../components/AppNav';
import AppButton from '../components/AppButton';

export default function Home() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/montemar/backend/api/users.php")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <AppNav />
      <Container>
        <h1>Home Page</h1>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>
                  <AppButton className="mx-1" text="Edit" onClick={() => alert(`Edit user ${user.name}`)} />
                    
                  <AppButton className="mx-1" text="Delete" onClick={() => alert(`Delete user ${user.name}`)} variant="danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Count: {count}</h3>
        <AppButton className="mx-1" text="Increment" onClick={handleIncrement} />
        <AppButton className="mx-1" text="Decrement" onClick={handleDecrement} variant="danger" />
      </Container>
    </>
  )
}