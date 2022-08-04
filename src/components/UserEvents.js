import UserEventCard from './UserEventCard'
import NoEventsCard from './NoEventsCard'


const UserEvents = ({ userName, userId, handleCurrentUser, userEvents, followingCategories, events, handleJoinEvent, handleLeaveEvent }) => {
    return (
        <div className='User-Events'>
            <div className='User-Upcoming-Events'>
                {userEvents ?
                    userEvents.length > 0 ? userEvents.map((event) => {
                        console.log(event)
                        const { id, name, date, participants, image } = event
                        return (
                            <UserEventCard
                                key={id}
                                userId={userId}
                                handleCurrentUser={handleCurrentUser}
                                event={event}
                                id={id}
                                name={name}
                                date={date}
                                participants={participants}
                                image={image}
                                events={events}
                                handleJoinEvent={handleJoinEvent}
                                handleLeaveEvent={handleLeaveEvent}
                                userEvents={userEvents}
                            />
                        )
                    })
                    : <NoEventsCard />
                : <></>}
            </div>
        </div>
    )
}

export default UserEvents