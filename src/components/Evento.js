function Evento() {
  function meuEvento() {
    alert(`Opa! fui ativado!!`);
  }
  return (
    <div>
      <p>Click para despara o evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  );
}

export default Evento;
