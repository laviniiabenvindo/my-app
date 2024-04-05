import Button from './Button';

function Evento() {
  function meuEvento() {
    alert(`Ativando o primeiro evento!`);
  }

  function segundoEvento() {
    alert('Ativando o segundo evento');
  }

  return (
    <div>
      <p>Click para despara o evento</p>
      <Button event={meuEvento} text="Meu primeiro evento" />
      <Button event={segundoEvento} text="Meu segundo evento" />
    </div>
  );
}

export default Evento;
