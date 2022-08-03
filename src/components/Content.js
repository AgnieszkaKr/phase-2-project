import {useEffect, useState} from 'react'
import Event from './Event'

const Content = ({events, setEvents}) => {
    
    useEffect(()=>{
        fetch('http://localhost:8000/events')
        .then(req => req.json())
        .then(res => setEvents(res))
    }, [])

    let displayEightEvents = events.filter((event, index) => index < 8)

    return (
        <div className='Content'>
            { displayEightEvents.map(event =><Event key={event.id} event={event}/>)
            }
            <p>SHOW MORE</p>
        </div>
        )
}

export default Content