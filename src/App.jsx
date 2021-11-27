import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AlllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetups />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
