import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'

const UserScreen = () => {
    return (
        <div className='User-Screen'>
            <UserEvents />
            <UpcomingEvents />
        </div>
    )
}

export default UserScreen