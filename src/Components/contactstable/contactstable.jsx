import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Contactlist() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <Button variant="dark">Editar</Button>
            <Button variant="danger">Deletar</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Contactlist;