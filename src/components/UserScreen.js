import { useState } from 'react'
import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'

const UserScreen = ({ user, joinedEvents, events }) => {
    const { user_name, following_categories } = user
    const [showMoreEvents, setShowMoreEvents] = useState(false)
    const handleShowMoreEvents = () => {
        // show more events for user
        setShowMoreEvents(!showMoreEvents)

    return (
        <div className='User-Screen'>
            {showMoreEvents ? (
                <>
                    <p>all events</p>
                </>

            ) : (
            <>
                <UserEvents
                    userName={user_name}
                    joinedEvents={joinedEvents}
                    followingCategories={following_categories}
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
}

export default UserScreen