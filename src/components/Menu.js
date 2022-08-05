import { useState } from 'react'

const Menu = ({ currentUser }) => {
    const { id, user_name, password, joined_events, image, following_categories } = currentUser


    return (
        <div className='Menu'>
            <img className="userImage" src={image} alt="" />
            <div>
                <h3>Hello, {user_name}!</h3>
            </div>

        </div>
    )
}

export default Menu