import { useState } from 'react'

const Menu = ({ currentUser }) => {
    const { id, user_name, password, joined_events, image, following_categories } = currentUser
    const [click, setClick] = useState(false)
    
    const handleClick = () => {
        setClick(click => !click)
    }

    return (
        <div className='Menu'>
            <img className="userImage" src={image} alt="" />
            <div>
                <h3>Hello, {user_name}!</h3>
            </div>
            <div id='profile-button' onClick={handleClick}>
                {/* <img onClick={handleClick} src='https://www.freeiconspng.com/uploads/menu-icon-24.png' width='15px' height='auto' />  */}
                {click ? '' : 'Links' }
            </div>
            {/* <div className='links-div'> */}
            <div className={`links-${click ? 'show' : 'hide'}`}>
                <ul>
                    <li>My Events</li>
                    <li>Find an Event</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu