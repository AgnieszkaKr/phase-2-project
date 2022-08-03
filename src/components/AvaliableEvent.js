import {useState} from 'react'

const AvaliableEvent = ({event}) => {
    const[showMore, setShowMore]=useState(false)
    const handleClick =()=>{
        setShowMore(!showMore)
    }
    
    const date = new Date(event.date)
    const day = date.getDate()
    const dayName = date.toLocaleDateString('en-US', {weekday: 'short'})
    const month = date.toLocaleString('default', { month: 'short' })
    const hour = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    const year = date.getFullYear()
    return (
        <div className="Avaliable-Event">
            
            <img className="avaliable-event-img" src={event.image} alt="" onClick={handleClick}/>
            <p className="Avaliable-Event-Details">
            <h3>{event.name}</h3>
            <p>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`}</p>
            </p>
        </div>

    )
}

export default AvaliableEvent;