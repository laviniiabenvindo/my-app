// import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'Marcela';
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName nome="Lavínia Benvindo" />
      <Pessoa nome="Lavinia" idade="18" profissao="Programadora" foto="https://i1.sndcdn.com/artworks-000357909669-bveymq-t500x500.jpg" />
    </div>
  );
}
export default App;
