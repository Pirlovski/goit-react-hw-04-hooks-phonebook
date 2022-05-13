import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ value, onChangeFilter }) => (
  <label className={s.title}>
    {' '}
    find contact by name{' '}
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />{' '}
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
export default Filter;
