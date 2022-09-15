import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    padding-top: 50px;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
`;

export const TransactionTable = styled.table`
    margin-right: auto;
    margin-left: auto;
    border: 1px solid grey;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);

`;

export const NameOfColumn = styled.th`
    text-transform: uppercase;
    padding-top: 15px;
    padding-bottom: 15px;
    width:200px;
    border: 1px solid grey;
    background: #adeeee;

`;

export const Row = styled.tbody`
    text-align: center;
    
    &:nth-child(2n+1) {
        background: hsl(180deg 27% 94%);}
`;

export const Content = styled.td`
    text-transform: capitalize;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid grey;
    
`;

