import { useState } from 'react';

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }
  function limparEmail(e) {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="submit"
          onClick={enviarEmail}
          value="Enviar e-mail"
        ></input>
        {userEmail && (
         <div>
          <p>O email do usuario é {userEmail}</p>
          <button onClick={limparEmail}>Limpar E-mail</button>
         </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
