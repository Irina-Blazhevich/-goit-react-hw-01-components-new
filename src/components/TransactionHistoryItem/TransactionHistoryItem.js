import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
