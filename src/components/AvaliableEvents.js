import {useState} from 'react'
import AvaliableEvent from './AvaliableEvent'
import Calendar from 'react-calendar'

const AvaliableEvents = ({events}) => {
    // to do:
    // change events to display with sign which are attended by user (user id and check event id)
    const[date, setDate]=useState(new Date())
    


    return (
        <div>
        <div className="filters"> 
            <button className="filter-button"  > search by date </button>
            <button className="filter-button"> search by type </button>
            <button className="filter-button"> search by category </button>
        </div>  
        <div className='AvaliableEvents'>
            {events.map(event => <AvaliableEvent event={event}/> )}

        </div>
        </div>
    )
}

export default AvaliableEvents


