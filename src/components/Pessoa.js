import styles from "./Pessoa.module.css";
function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div className={styles.pessoaContainer}>
      <img src={foto} alt={nome} />
      <section className={styles.pessoaContainer_item}>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
      </section>
    </div>
  );
}

export default Pessoa;
