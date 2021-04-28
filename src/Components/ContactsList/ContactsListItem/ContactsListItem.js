import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span>
        <span className={styles.name}> {name} : </span>
        <span className={styles.number}>{number}</span>
      </span>

      <button className={styles.button} onClick={() => onRemove(id)}>
        Remove
      </button>
    </li>
  );
};

export default ContactsListItem;
