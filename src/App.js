import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApartmentDetail from "./components/Home/ApartmentDetail/ApartmentDetails";
import AddHouse from "./components/Home/Dashboard/AddHouse/AddHouse";
import BookingList from "./components/Home/Dashboard/BookingList/BookingList";
import MyRent from "./components/Home/Dashboard/MyRent/MyRent";
import Home from "./components/Home/Home/Home";
import Login from "./components/Home/Login/Login";
import PrivateRoute from "./components/Home/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    photo: '',
  });


  return (
    <UserContext.Provider value={{ userData: [user, setUser] }}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/service">
            <ApartmentDetail />
          </Route>

          <Route path="/services/:id">
            <ApartmentDetail />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <BookingList />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>

          <PrivateRoute path="/addHouse">
            <AddHouse />
          </PrivateRoute>

          <PrivateRoute path="/myRent">
            <MyRent />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;