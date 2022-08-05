import Login from './Login'
import Menu from './Menu'

const Header = ({ users, currentUser, handleLoginSuccess, isLoggedIn, setCurrentUser }) => {
    return (
        <div className='Header'>
            
            <div className='title-display-container'>
<<<<<<< HEAD
                <p style={{fontFamily: 'Abril Fatface', fontSize: '90px', letterSpacing: '0.05em'}}>MeetCODE</p>
=======
                <p>Applicaton Name</p>
>>>>>>> join-branch
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