import AttendButton from './AttendButton.js'

const UserEventCard = ({ id, name, date, participants, image, events, joinedEvents }) => {
    return (
        <div className='User-Event-Card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <img className='user-event-card-image' src={image} />
            <p>{participants.length} attending</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            {/* <AttendButton 
                id={id} 
                events={events}
                joinedEvents={joinedEvents}
            /> */}
        </div>
    )
}

export default UserEventCard