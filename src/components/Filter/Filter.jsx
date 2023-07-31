import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({setFilterToState}) => {

  const setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };
  
    return (
      <div className={css.filterContainer}>
        <label className={css.labelFilter}>Find contacts by name</label>
        <br/>
        <input className={css.filter} onChange={setFilterValue}></input>
      </div>
    );
  }


Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};

export default Filter;
