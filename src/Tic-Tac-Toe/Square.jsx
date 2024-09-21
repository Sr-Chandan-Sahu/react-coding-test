import React from 'react'
const squareStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "#ddd",
    margin: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    color: "white",
}

const disabledSquareStyle = {
    ...squareStyle,
    cursor: "not-allowed",
}
const Square = ({ value, onClick, winner }) => {
    return (
        <button
            className="square"
            onClick={() => onClick(value)}
            style={
                value !== null || winner !== "None"
                    ? disabledSquareStyle
                    : squareStyle
            }
            disabled={value !== null || winner !== "None"}
        >
            {value}
        </button>
    )
}
export default Square
