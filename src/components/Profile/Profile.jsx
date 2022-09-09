import PropTypes from "prop-types";
import user from '../Profile/user'

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> 

function Description(props) {
    return (
        <div className="description">
     <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{user.username}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>
    )
}

function Stats (props) {
    return (
    <ul className="stats">
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
    )
}

export function Profile(props) {
    return (
    <div className="profile">
    <Description/>
    <Stats/>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
}

