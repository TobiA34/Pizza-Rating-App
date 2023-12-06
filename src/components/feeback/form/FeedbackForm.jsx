import React from 'react'
import Card from '../../shared/Card'
import { useState } from 'react'
import Button from '../../shared/Button'
import RatingSelect from '../rating/RatingSelect'
import { isDisabled } from '@testing-library/user-event/dist/utils'
function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

    const handleSubmit = (e) => {
        e.preventDefault()
        //check for 10 or more characters
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            //log object newFeedback
            // console.log(newFeedback)
            handleAdd(newFeedback)
            //clear field 
            setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your pizza 🍕</h2>

        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm
