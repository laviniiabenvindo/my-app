// import logo from './logo.svg';
import './App.css';
import HelloWard from './components/HelloWord';

function App() {
  const name = 'Lavínia emelly';
  const newNema = name.toUpperCase();
  const url = 'https://i1.sndcdn.com/artworks-000357909669-bveymq-t500x500.jpg';

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá {newNema}</p>
      <p>Soma: {sum(2, 2)}</p>
      <HelloWard />
      {/* <img src={url} alt="Minha imagem"></img> */}
    </div>
  );
}
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
export default App;
