import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.image} alt="" />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        {`${dayName}, ${day} ${month}, ${year} ${hour} EST`}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    {showMore ? <div>{event.description}</div>:<></>}
                    <button className="button-description" onClick={handleClick}>{showDescription}</button>
                </Card.Body>
            </Card>

            
        </div>
    )
}

export default Event;
