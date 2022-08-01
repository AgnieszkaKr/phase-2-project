const Event = ({event}) => {


    return (
        <div className='Event'>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <img class="event-img" src={event.image} alt="" />
            <p>description </p>

        </div>
    )
}

export default Event;
