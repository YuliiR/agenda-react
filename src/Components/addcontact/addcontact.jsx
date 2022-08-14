import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Addnewcontact() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1"><Button variant='Dark'>+</Button></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <main>
                <section className='newContact'>
                <h2>Novo contato</h2>
            <form>
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Telefone'/>
            <input type="text" placeholder='Email'/>
            <button>Adicionar</button>
          </form>
        </section> 
        </main>
    </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Addnewcontact;