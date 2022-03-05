import React, { useState, useContext ,useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './Shared/Button'
import Card from './Shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

  const [text,setText]=useState('')
  const [rating,setRating]=useState(10)
  const [btnDisabled,setBtnDisabled]=useState(true)
  const [message,setMessage]=useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const textChangeHandler=(e)=>{
    if(text===''){
      setBtnDisabled(true)
      setMessage(null)
    }else if (text !=='' && text.trim().length<9) {
      setBtnDisabled(true)
      setMessage('You must enter at least 10 characters')
    }
    else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (text.trim().length>9) {
      const newFeedback = {
        text,
        rating
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback )
      } else {addFeedback(newFeedback)}
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How whould you rate your service with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating) }/>
        <div className='input-group'>
        <input type="text" placeholder='Write a review' onChange={textChangeHandler} value={text} />
        <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
        </form>                                                                                                                                                                                               
    </Card>
  )
}

export default FeedbackForm
