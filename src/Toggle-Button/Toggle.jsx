import React from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <button type="button" onClick={handleClick}>
            {toggle ? "ON" : "OFF"}
        </button>
    )
}

export default Toggle
