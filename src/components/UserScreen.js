import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'

const UserScreen = ({ user, joinedEvents }) => {
    const { user_name, following_categories } = user
    return (
        <div className='User-Screen'>
            <UserEvents 
                userName={user_name}
                joinedEvents={joinedEvents}
                followingCategories={following_categories}
            />
            <UpcomingEvents />
        </div>
    )
}

export default UserScreen