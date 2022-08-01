import Login from './Login'

const Header = () => {
    return (
        <div className='Header'>
            <div className='title-display-container'>
                <h1>Applicaton Name</h1>
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}

export default Header