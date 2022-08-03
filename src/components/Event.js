import {useState} from 'react'

const Event = ({event}) => {
    const[showMore, setShowMore]=useState(false)
    const handleClick =()=>{
        setShowMore(!showMore)
    }
    let showDescription= (showMore) ? "hide details":"show details"
    const date = new Date(event.date)
    const day = date.getDate()
    const dayName = date.toLocaleDateString('en-US', {weekday: 'short'})
    const month = date.toLocaleString('default', { month: 'short' })
    const hour = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    const year = date.getFullYear()
    return (
        <div className='Event'>
            <img className="event-img" src={event.image} alt="" />
            <h3>{event.name}</h3>
            <p>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`}</p>
            {showMore ? <div>{event.description}</div>:<></>}
            <button className="button-description" onClick={handleClick}>{showDescription}</button>

            
        </div>
    )
}

export default Event;
