import UserEventCard from './UserEventCard'
import NoEventsCard from './NoEventsCard'


const UserEvents = ({ userName, joinedEvents, followingCategories, events, handleJoinEvent, handleLeaveEvent, userEventIds }) => {
    return (
        <div className='User-Events'>
            <h2>Your Upcoming Events</h2>
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
                                handleJoinEvent={handleJoinEvent}
                                handleLeaveEvent={handleLeaveEvent}
                                joinedEvents={joinedEvents}
                                userEventIds={userEventIds}
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