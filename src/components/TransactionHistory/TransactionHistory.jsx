import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeadCell}>TYPE</th>
          <th className={css.tableHeadCell}>AMOUNT</th>
          <th className={css.tableHeadCell}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={transaction.id} style={{ backgroundColor: `${index % 2 ? '#e0e0e0' : '#fff'}` }}>
            <td className={css.tableCell}>
              {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
            </td>
            <td className={css.tableCell}>{transaction.amount}</td>
            <td className={css.tableCell}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
