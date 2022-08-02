const Menu = ({ currentUser }) => {
    const { id, user_name, password, joined_events, image, following_categories } = currentUser
    return (
        <div className='Menu'>
            <img className="userImage" src={image} alt="" />
            <div>
                <h3>Hello, {user_name}!</h3>
            </div>
            <div id='profile-button'>
                <img src='https://www.freeiconspng.com/uploads/menu-icon-24.png' width='15px' height='auto' /> 
            </div>
            
        </div>
    )
}

export default Menu