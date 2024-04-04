import styles from "./Item.module.css"
function Item(props) {
  return (
    <>
      <li className={styles.ItemContainer}>{props.marca}</li>
      <p className={styles.ItemParagrafo}>Descrição</p>
    </>
  );
}

export default Item;
