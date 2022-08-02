import Event from './Event'
import AvaliableEvent from './AvaliableEvent'

const AvaliableEvents = ({events}) => {
    // change events to display with sign which are attended by user (user id and check event id)
    return (
        <div>
        <div className="filters"> 
            <button className="filter-button"> search by date </button>
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


