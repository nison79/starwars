import React from 'react'

function Navbar( { setPage }) {
    return (
        <div className ="navbar">
        <nav>
            <button onClick={() => setPage('planets')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </nav>
            
        </div>
    )
}

export default Navbar
