import Login from './Login'

const Header = ({ users, handleLoginSuccess }) => {
    return (
        <div className='Header'>
            <div className='title-display-container'>
                <h1>Applicaton Name</h1>
            </div>
            <div>
                <Login 
                    users={users}
                    handleLoginSuccess={handleLoginSuccess}
                />
            </div>
        </div>
    )
}

export default Header