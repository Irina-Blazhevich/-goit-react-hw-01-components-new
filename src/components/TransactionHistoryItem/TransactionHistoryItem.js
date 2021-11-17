import React from 'react';
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

export default TransactionHistoryItem;
