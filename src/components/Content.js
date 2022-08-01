import {useEffect, useState} from 'react'
import Event from './Event'

const Content = () => {
    const[events, setEvents]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/events')
        .then(req => req.json())
        .then(res => setEvents(res))
    }, [])

    return (
        <div className='Content'>
            {events.map(event => {return <Event key={event.id} event={event}/>})}

        </div>
    )
}

export default Content