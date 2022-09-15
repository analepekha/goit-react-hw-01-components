import PropTypes from 'prop-types';
import {
    Container,
    TransactionTable,
    NameOfColumn,
    Row,
    Content
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
    return (
        <Container>
            <TransactionTable >
                    <thead>
                        <tr>
                            <NameOfColumn>Type</NameOfColumn>
                            <NameOfColumn>Amount</NameOfColumn>
                            <NameOfColumn>Currency</NameOfColumn>
                        </tr>
                    </thead>
            
            {items.map(({ id, type, amount, currency }) =>
                    <Row key={id}>
                        <tr>
                          <Content>{type}</Content>
                          <Content>{amount}</Content>
                          <Content>{currency}</Content>
                        </tr>
                    </Row>              
            )}
            </TransactionTable>
        </Container>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }),
    )
}