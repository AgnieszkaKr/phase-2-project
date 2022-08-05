import Login from './Login'
import Menu from './Menu'

const Header = ({ users, currentUser, handleLoginSuccess, isLoggedIn }) => {
    return (
        <div className='Header'>
            
            <div className='title-display-container'>
                <p style={{fontFamily: 'Abril Fatface', fontSize: '250%', letterSpacing: '0.05em'}}>MeetCODE</p>
            </div>
                {
                    !isLoggedIn
                    ?    
                    <div className='Login-Container'>
                        <Login 
                        users={users}
                        handleLoginSuccess={handleLoginSuccess} 
                        />
                    </div>
                    : <div className='User-Menu'>
                        <Menu 
                        currentUser={currentUser} 
                        />
                    </div>
                }
        </div>
    )
}

export default Header