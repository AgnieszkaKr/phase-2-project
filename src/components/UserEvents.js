import UserEventCard from './UserEventCard'
import NoEventsCard from './NoEventsCard'


const UserEvents = ({ userName, joinedEvents, followingCategories }) => {
    return (
        <div className='User-Events'>
            <h2>Your Upcoming Events</h2>
            <div className='user-upcoming-events'>
                {joinedEvents 
                    ? joinedEvents.map((event) => {
                        const { id, name, date, participants, image } = event
                        return (
                            <UserEventCard
                                key={id}
                                image={image}
                            />
                        )
                    })
                    : <NoEventsCard />
                }
            </div>
        </div>
    )
}

export default UserEvents