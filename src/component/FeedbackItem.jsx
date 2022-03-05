import React from 'react'
import Card from './Shared/Card'
import { FaTimes , FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

const {deleteFeedback, editFeedback}= useContext(FeedbackContext)
  

  return (
    <div>
      <Card >
          <div className="num-display">{item.rating}</div>
          <button className="close" onClick = {() => deleteFeedback(item.id)}>
            <FaTimes color='purple' />
          </button>
          <button className="edit" onClick= {() => editFeedback(item) }>
            <FaEdit color='purple'></FaEdit>
          </button>
          <div className="text-display">{item.text}</div>
      </Card>
    </div>
  )
}

export default FeedbackItem
