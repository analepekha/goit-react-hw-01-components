import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    max-width: 300px;
    padding-top: 50px;
    margin-right: auto;
    margin-left: auto;`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 2%;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
    
    background: hsl(240deg 100% 99%);`;

export const Status = styled.span`
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${props=> (props.isOnline ? '#01ab01' : '#ff2f00')};`;

export const Avatar = styled.img`
    border-radius: 20%;
    margin-right: 10px;
`;

export const Name = styled.p`
    font-weight: 500;`;

