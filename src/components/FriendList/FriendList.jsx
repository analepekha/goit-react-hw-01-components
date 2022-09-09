import PropTypes from "prop-types";
import friends from './friends';

export function FriendList(friends) {
    return (
        <ul className="friend-list">
            <FriendListItem/>
        </ul>
    )
}

function FriendListItem(avatar, name, isOnline) {
    return (
    <div>
        {friends.map(({avatar,name, isOnline,id}) =>
        <li className="item" key={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
            )}
    </div>)
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}