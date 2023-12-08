import Header from "./components/layout/Header";
import "./styles/App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/icons/AboutIconLink";
import Post from "./components/post/Post";
import NotFound from "./pages/NotFound";
import { FeedbackProvider } from "./context/FeedbackContext";
import Home from "./pages/Home";

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
                  {/* <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList /> */}
                  <Home/>
                </div>
              }
            ></Route>
            <Route path="/" element={<Home />} />

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
