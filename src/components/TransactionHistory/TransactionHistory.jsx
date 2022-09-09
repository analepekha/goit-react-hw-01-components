import transactions from './transactions';

export function TransactionHistory(items) {
    return (
        <>
            {transactions.map(({ id, type, amount, currency }) =>
                <table className="transaction-history" key={id}>
                    <thead>
                        <tr>
                            <th>{type}</th>
                            <th>{amount}</th>
                            <th>{currency}</th>
                        </tr>
                    </thead>
                </table>
            )}
        </>
    );
}