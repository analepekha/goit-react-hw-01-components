import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 50px;
    max-width: 300px;
    margin-right: auto;
    margin-left: auto;`;

export const Title = styled.h2`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    text-transform: uppercase;
    
    background: #e1e1fc;`;

export const StatList = styled.ul`
    display: flex;

    background: hsl(206deg 19% 84%);
    `;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:60px;

    &:not(:last-child){
        border-right: 1px solid white;
    }
    `;

export const Label = styled.span`
    margin-bottom: 10px;`;

export const Percentage = styled.span`
    font-size: 20px;
    font-weight: 500;`;

