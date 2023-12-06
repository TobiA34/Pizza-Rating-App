import Header from "./components/layout/Header";
import "./styles/App.css";
 import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/feeback/FeedbackList";
import FeedbackStats from "./components/feeback/FeedbackStats"
import FeedbackForm from "./components/feeback/form/FeedbackForm";
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
 import { useState } from "react";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/icons/AboutIconLink";
import Post from "./components/post/Post";
import NotFound from "./pages/NotFound";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      /*
      - use to replace feedback value and set the function

      - item id is not equal to id being passed in and return an new array minus the one being deleted
      */

      setFeedback(feedback.filter((item) => item.id !== id))
    }

  }


const addFeedback = (newFeedback) => {
  newFeedback.id = uuidv4()
  setFeedback([newFeedback, ...feedback])
}

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <FeedbackForm handleAdd={addFeedback} element={FeedbackForm} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </div>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
