import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';

function Contactlist({contactList, fetchContact, onUpdate}) {
    useEffect(() => {
      fetchContact();
    }, []);

const handleDelete = async (contatoId) => {
  const response = await fetch("http://localhost:4000/contatos/" + contatoId, {
    method: 'DELETE',
  })
  if(response.ok){
    handleClose();
    fetchContact();
  }
}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 

  return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {contactList?.map(contato => {
            return(
              <tr key={contato.id}>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.telefone}</td>
                <td>
                  <Button variant="dark" onClick={() => onUpdate(contato.id)}>Editar</Button>
                  <Button variant="danger" onClick={handleShow}>Excluir</Button>
                </td>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>

                  <Modal.Header closeButton>
                    <Modal.Title>Tem certeza que deseja excluir o contato?</Modal.Title>
                  </Modal.Header>
                   <Modal.Body>
                      Você não pode recuperá-lo mais tarde.
                   </Modal.Body>
                   <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Fechar
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(contato.id)}>Excluir</Button>
                    </Modal.Footer>
                </Modal>
              </tr>
            )
          })}
        </tbody>
      </Table>
  );
}

export default Contactlist;