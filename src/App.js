// import logo from './logo.svg';
import './App.css';
import HelloWard from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Marcela';
  return (
    <div className="App">
      <HelloWard />
      <SayMyName nome="Lavouras" />
      <SayMyName nome="Juan" />
      <SayMyName nome={nome} />
      <Pessoa nome="Lavinia" idade="18" profissao="Programadora" foto="https://i1.sndcdn.com/artworks-000357909669-bveymq-t500x500.jpg" />
    </div>
  );
}
export default App;
