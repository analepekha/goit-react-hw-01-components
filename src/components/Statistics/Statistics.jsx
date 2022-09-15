import PropTypes from "prop-types";
import {
    Container,
    Title,
    StatList,
    Item,
    Label,
    Percentage
} from './Statistics.styled';

export function Statistics({ title, stats }) {
    return (
        <Container>
          <Title>{title}</Title>
        <StatList>
            {stats.map(({ id, label, percentage }) => 
             <Item key={id}>
            <Label>{label} </Label>
            <Percentage>{percentage}%</Percentage>
             </Item>
            )}
        </StatList>
        </Container>
            );          
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}