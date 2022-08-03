import {useState} from 'react'
import AvaliableEvent from './AvaliableEvent'
// import Calendar from 'react-calendar'

const AvaliableEvents = ({events}) => {
    // to do:
    // change events to display with sign which are attended by user (user id and check event id)
    
    const[searchKey, setSearchKey]=useState('')
    const[filter, setFilter]=useState(events)
    const handleSearchKey =(e)=>{
        setSearchKey(e.target.value)
        console.log(e.target.value)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes(searchKey.toLowerCase())})
        console.log()
        setFilter(filterEvents)
    }

    return (
        <div>
        <div className="filters"> 
            <button className="filter-button" >search by date </button>
            <button className="filter-button"> search by category </button>
            <input className="filter-input" type="text" placeholder="search by keyword" value={searchKey} onChange={handleSearchKey}/>
        </div>  
        <div className='AvaliableEvents'>
            {filter.map(event => <AvaliableEvent event={event}/> )}

        </div>
        </div>
    )
}

export default AvaliableEvents


