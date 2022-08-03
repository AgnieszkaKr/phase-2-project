import { useState } from 'react'
import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import AvaliableEvents from './AvaliableEvents'

const UserScreen = ({ user, handleCurrentUser, joinedEvents, events, handleJoinEvent, handleLeaveEvent, userEventsIds }) => {
    const [showMoreEvents, setShowMoreEvents] = useState(false)
    
    const { user_name, following_categories } = user
    const userId = user.id

    const handleShowMoreEvents = () => {
        // show more events for user
        setShowMoreEvents(!showMoreEvents)
    }

    return (
        <div className='User-Screen'>
            {showMoreEvents ? (
                <>
                    <AvaliableEvents events={events}/>
                </>

            ) : (
            <>
                <UserEvents
                    userName={user_name}
                    userId={userId}
                    handleCurrentUser={handleCurrentUser}
                    joinedEvents={joinedEvents}
                    followingCategories={following_categories}
                    events={events}
                    handleJoinEvent={handleJoinEvent}
                    handleLeaveEvent={handleLeaveEvent}
                    userEventsIds={userEventsIds}
                />
                <div className="Upcoming-Events">
                    <h3>Upcoming events</h3>
                    {events.map(event =>{
                    if (event.id <= 4) return <UpcomingEvents key={event.id} event={event}/>
                    })}
                
                    <button className="show-more-events" onClick={handleShowMoreEvents}> show more events</button>
                </div>
            </>
            )}
        </div>
    )
}

export default UserScreen



