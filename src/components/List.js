import Item from "./Item";
import styles from './List.module.css';

function List() {
  return (
    <>
      <h1>Lista de carros</h1>
      <ul className={styles.ListContainer}>
       <Item marca="Ferrari" />
       <Item marca="Fiat" />
       <Item marca="Renault" />
      </ul>
    </>
  );
}

export default List;
