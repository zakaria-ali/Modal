import './App.css';
import axios from 'axios';
import Modal from './Components/Modal';
import ModalContent from './Components/ModalContent';
import { useEffect, useState } from 'react';


function App() {
  const [user,setUser] = useState({})
  const [counter,setCounter] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${counter}`);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, [counter]);  
  
  return (
    <div>
      <Modal>
        <ModalContent>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
          <div className='btnContainer'>
            <button onClick={()=> setCounter(counter + 1)} className="btn">Next</button>
            <button onClick={()=> setCounter(()=> counter > 1 &&  counter - 1)} className="btn">Previous</button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
