import React from 'react'
import FeedbackForm from '../components/feedback/form/FeedbackForm';
import FeedbackStats from '../components/feedback/FeedbackStats';
import FeedbackList from '../components/feedback/FeedbackList';

function Home() {
  return (
    <div>
      <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
    </div>
  );
}

export default Home
