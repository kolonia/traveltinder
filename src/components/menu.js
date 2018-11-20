import React from 'react'
import Link from 'gatsby-link';

const Menu = () => {
    return(
        <div style ={{
            background: '#008000',
            paddingTop: '10px'
        }}>

        <u1 style = {{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trip">Add</Link></li>
        <li><Link to="/profile-one">Profile</Link></li>

        </u1>

        </div>
    )
}

export default Menu;