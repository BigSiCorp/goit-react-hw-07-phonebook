import React from 'react';
import { useDispatch } from 'react-redux';
import { onChange } from 'redux/contactsFilterSlice';
import PropTypes from 'prop-types';
import s from './Filter.module.css';


export const Filter = () => {
  
  const dispatch = useDispatch();
  const handleFilterContactsByName = e => {
        const { value } = e.target;
        dispatch(onChange(value.toLowerCase()));
      };
  return (
    <>
      <label>
        <span className={s.msgFilter}>Find contact by name</span>
        <input
          type="text"
            onChange={handleFilterContactsByName}
          className={s.inputFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
