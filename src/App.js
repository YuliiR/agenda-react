import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Router } from 'react-router-dom';
import NavbarS from './Components/navbar/navbar';
import Contactlist from './Components/contactstable/contactstable';
import Addnewcontact from './Components/addcontact/addcontact';
import {useState} from 'react'

function App() {
  const [contactList, setContactList] = useState([]);

  function fetchContact() {

    fetch("http://localhost:4000/contatos/")
    .then((response)=> response.json())
    .then(data => setContactList(data))
    .catch(e => console.error('FETCH ERROR: ', e));
  } 

  return (
    <>
    <NavbarS />
    <Contactlist contactList={contactList} fetchContact={fetchContact}/>
    <Addnewcontact fetchContact={fetchContact}/>
    </>
  )
}


export default App;
