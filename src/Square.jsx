import PropTypes from "prop-types"; // Add this import

function Square({ value, index, onClick }) {
    return (
        <div className="square" onClick={() => onClick(index)}>
            {value}
        </div>
    );
}

export default Square;
// Add prop types validation

Square.PropTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
