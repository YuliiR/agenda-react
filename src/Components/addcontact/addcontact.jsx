import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      variant='dark'
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Addnewcontact({name, number, email, setName, setNumber, setEmail, fetchContact}) {

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = {
            "nome": name,
            "telefone": number,
            "email": email 
        }

        const response = await fetch("http://localhost:4000/contatos/", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {"Content-type":"application/json; charset=UTF-8"}
        });

        if(response.ok){
            console.log("ok", response.ok);
            fetchContact();
        }

    }

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">+</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <section className='newContact'>
            <h3>Novo contato</h3>
            <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                placeholder='Nome'
            />
            <input 
                type="text"
                value={number}
                onChange={(e)=> setNumber(e.target.value)} 
                placeholder='Telefone'
            />
            <input 
                type="text" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                placeholder='Email'
            />
            <Button variant='dark' type='submit'>Adicionar</Button>
          </form>
        </section> 
    </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Addnewcontact;