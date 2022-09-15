import PropTypes from "prop-types";
import {
    Container,
    List,
    ListItem,
    Status,
    Avatar,
    Name
} from './FriendsList.styled';

export function FriendList({ friends }) {
    return (
        <Container>
            <List>
                {friends.map(({avatar,name, isOnline, id}) =>
            <ListItem key={id}>
                <Status isOnline={isOnline}></Status>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </ListItem>
                )}
            </List>
        </Container>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
    )
}