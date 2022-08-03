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
        <div classNam='filters'> 
            <button className='filter-button' >search by date </button>
            <button className='filter-button'> search by category </button>
            <input className='filter-input' type='tex=' placeholder='search by keyword' value={searchKey} onChange={handleSearchKey}/>
        </div> 
        <div className='Events-Group'>
            <img src='https://cdn.dribbble.com/users/2704931/screenshots/7048399/media/e9125c8957513a73a246798b8b21350d.png?compress=1&resize=800x600&vertical=top' alt='interview'className='Group-Event-Image'/>
            <img src='https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' alt='pair-programming' className='Group-Event-Image'/>
            <img src='https://t3.ftcdn.net/jpg/02/83/03/80/360_F_283038002_b0lUl4BSXEEICv0VIZX2Em6mAQe8vMkN.jpg' alt='hackathon' className='Group-Event-Image'/>


        </div>
        <div className='AvaliableEvents'>
            {filter.map(event => <AvaliableEvent event={event}/> )}

        </div>
        </div>
    )
}

export default AvaliableEvents


