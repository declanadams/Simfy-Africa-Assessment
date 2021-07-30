//pages
import ListPage from "./pages/list-page/list-page.component";
import HomePage from "./pages/home-page/home-page.component";

//components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import VideoDetails from "./components/video-details/video-details.component";

//modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VideoProvider } from "./contexts/videoContext";

const App = () => {
  return (
   <VideoProvider>
        <>
          <Router>
            <Header/>
            <Switch>
              <Route path='/videos/:id'>
                  <VideoDetails/>
              </Route>

              <Route path='/videos'>
                  <ListPage/>
              </Route>

              <Route path='/'>
                  <HomePage/>
              </Route>
            </Switch>
            <Footer/>
          </Router>
        </>
   </VideoProvider>
  );
}

export default App;
