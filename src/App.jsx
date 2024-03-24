import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import FormularioColor from './components/FormularioColor';

function App() {
  return (
    <section className='principal'>
      <Container className='py-5'>
        <FormularioColor></FormularioColor>
      </Container>
    </section>
  )
}

export default App