import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarS from './Components/navbar/navbar';
import Contactlist from './Components/contactstable/contactstable';
import Addnewcontact from './Components/addcontact/addcontact';
import {useState} from 'react'

function App() {
  const [contactList, setContactList] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isEditar, setIsEditar] = useState(false);
  const [currentContact, setCurrentContact] = useState();


  const onUpdate = (contatoId) => {
    fetch("http://localhost:4000/contatos/" + contatoId)
    .then((response)=> response.json())
    .then(data => {
      setName(data.nome);
      setNumber(data.telefone);
      setEmail(data.email);
      setIsEditar(true);
      setCurrentContact(contatoId);
    })
  }

  const handleUpdate = async () => {
    const response = await fetch("http://localhost:4000/contatos/" + currentContact, {
      method: 'PATCH',
      body: JSON.stringify({
        nome: name,
        telefone: number,
        email: email
      }),
      headers: {"Content-type":"application/json; charset=UTF-8"}
    });
    if(response.ok) {
      fetchContact();
    }
   }

  function fetchContact() {

    fetch("http://localhost:4000/contatos/")
    .then((response)=> response.json())
    .then(data => setContactList(data))
    .catch(e => console.error('FETCH ERROR: ', e));
  } 

  return (
    <>
    <NavbarS />
    <Contactlist contactList={contactList} fetchContact={fetchContact} onUpdate={onUpdate}/>
    <Addnewcontact setName={setName}  
    setNumber={setNumber}
    setEmail={setEmail}
     fetchContact={fetchContact} 
     name={name} 
     number={number} 
     email={email}
     handleUpdate={handleUpdate}
     isEditar={isEditar}
     setIsEditar={setIsEditar}/>
    </>
  )
}


export default App;
