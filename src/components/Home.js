import Introduction from "./Introduction"
import Content from "./Content"
import UserScreen from "./UserScreen"

const Home = ({ userEvents, events, setEvents, isLoggedIn, currentUser, handleCurrentUser, handleJoinEvent, handleLeaveEvent}) => {
    return (

        !isLoggedIn
        ?
        <div className='show-before-login'>
                <Introduction />
                <Content userEvents={userEvents} events={events} setEvents={setEvents} isLoggedIn={isLoggedIn} />
            </div>
            :
            <div className='show-after-login'>
                <UserScreen
                    isLoggedIn={isLoggedIn}
                    user={currentUser}
                    handleCurrentUser={handleCurrentUser}
                    userEvents={userEvents}
                    events={events}
                    handleJoinEvent={handleJoinEvent}
                    handleLeaveEvent={handleLeaveEvent}
                    />
            </div>
    )
}

export default Home