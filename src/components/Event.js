import {useState} from 'react'

const Event = ({event}) => {
    const[showMore, setShowMore]=useState(false)
    const handleClick =()=>{
        setShowMore(!showMore)
    }
    let showDescription= (showMore)? "hide details":"show details"
    let date = new Date(event.date)
    // console.log(date)
    return (
        <div className='Event'>
            <img className="event-img" src={event.image} alt="" />
            <h3>{event.name}</h3>
            {/* <p>{date.getDay()}</p> */}
            <button className="button-description" onClick={handleClick}>{showDescription}</button>
            

        </div>
    )
}

export default Event;
