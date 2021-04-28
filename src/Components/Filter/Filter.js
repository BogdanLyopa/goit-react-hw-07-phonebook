import { connect } from 'react-redux';
import styles from './Filter.module.css';
import actions from '../../redux/contacts/contactsAction';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changedFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
