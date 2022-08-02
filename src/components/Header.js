import Login from './Login'
import Menu from './Menu'

const Header = ({ users, currentUser, handleLoginSuccess, isLoggedIn }) => {
    return (
        <div className='Header'>
            <div className='title-display-container'>
                <h1>Applicaton Name</h1>
            </div>
                {
                    !isLoggedIn
                    ?    
                    <div className='Login'>
                        <Login 
                        users={users}
                        handleLoginSuccess={handleLoginSuccess} 
                        />
                    </div>
                    : <div className='Menu'>
                        <Menu 
                        currentUser={currentUser} 
                        />
                    </div>
                }
        </div>
    )
}

export default Header