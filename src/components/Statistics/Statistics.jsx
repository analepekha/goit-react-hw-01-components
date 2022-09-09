import PropTypes from "prop-types";

export function Statistics({ title, stats }) {
    return (
        <>
          <h2 className="title">{title}</h2>
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => 
             <li className="item" key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
             </li>
            )}
        </ul>
        </>
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