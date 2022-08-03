import UserEventCard from './UserEventCard'
import NoEventsCard from './NoEventsCard'


const UserEvents = ({ userName, joinedEvents, followingCategories, events }) => {
    return (
        <div className='User-Events'>
            <div className='User-Upcoming-Events'>
                {joinedEvents 
                    ? joinedEvents.map((event) => {
                        const { id, name, date, participants, image } = event
                        return (
                            <UserEventCard
                                key={id}
                                id={id}
                                name={name}
                                date={date}
                                participants={participants}
                                image={image}
                                events={events}
                                joinedEvents={joinedEvents}
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