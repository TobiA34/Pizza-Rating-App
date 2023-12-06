import Header from "./components/layout/Header";
import "./styles/App.css";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats"
import FeedbackForm from "./components/feedback/form/FeedbackForm";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/icons/AboutIconLink";
import Post from "./components/post/Post";
import NotFound from "./pages/NotFound";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
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
    </FeedbackProvider>
  );
}

export default App;
