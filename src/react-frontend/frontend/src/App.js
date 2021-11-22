import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserLoginComp from "./components/UserLoginComp";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import ManageUserComp from "./components/ManageUserComp";
import AddUserComp from "./components/AddUserComp";
import UpdateUserComp from "./components/UpdateUserComp";
import ManagePhotoComp from "./components/ManagePhotoComp";
import AddPhotoComp from "./components/AddPhotoComp";
import UpdatePhotoComp from "./components/UpdatePhotoComp";

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UserLoginComp}></Route>
            <Route path="/login" exact component={UserLoginComp}></Route>
            <Route path="/users" component={ManageUserComp}></Route>
            <Route path="/add_user" component={AddUserComp}></Route>
            <Route path="/update_users/:id" component={UpdateUserComp}></Route>
            <Route path="/photos" exact component={ManagePhotoComp}></Route>
            <Route path="/upload_photos" exact component={AddPhotoComp}></Route>
            <Route path="/update_photos/:id" exact component={UpdatePhotoComp}></Route>
          </Switch>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;