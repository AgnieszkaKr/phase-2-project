import { useState } from 'react'
import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import AvaliableEvents from './AvaliableEvents'
import UserLanding from './UserLanding'
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const UserScreen = ({isLoggedIn, user, handleCurrentUser, userEvents, events, handleJoinEvent, handleLeaveEvent }) => {
    const [showMoreEvents, setShowMoreEvents] = useState(false)
    
    const { user_name, following_categories } = user
    const userId = user.id

    const handleShowMoreEvents = () => {
        // show more events for user
        setShowMoreEvents(!showMoreEvents)
    }

    return (
        <div className='User-Screen'>
            <UserLanding />
            {showMoreEvents ? (
                <>
                <AvaliableEvents events={events} userName={user_name} isLoggedIn={isLoggedIn} handleJoinEvent={handleJoinEvent} handleLeaveEvent={handleLeaveEvent} userEvents={userEvents} />
                </>

            ) : (
            <>
                <UserEvents
                    userName={user_name}
                    userId={userId}
                    handleCurrentUser={handleCurrentUser}
                    userEvents={userEvents}
                    followingCategories={following_categories}
                    events={events}
                    handleJoinEvent={handleJoinEvent}
                    handleLeaveEvent={handleLeaveEvent}
                />
                <div className="Upcoming-Events">
                    <h3>Upcoming events</h3>
                    <br/>
                    <Container>
                        <Col>
                            {events.map(event =>{
                            if (event.id <= 4) return <UpcomingEvents key={event.id} event={event} handleJoinEvent={handleJoinEvent} handleLeaveEvent={handleLeaveEvent} userEvents={userEvents} />
                            })}
                        </Col>
                    </Container>
                    <img style={{ width:'30px', height:'30px', float:'right' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9sjY02gWy9m1rj_kMRTe5c4Aicl2WO3etg&usqp=CAU' className="show-more-events" onClick={handleShowMoreEvents}/>
                </div>
            </>
            )}
        </div>
    )
}

export default UserScreen



