// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import UserComp from './components/UserComp';
//import HeaderComp from './components/HeaderComp';
//import FooterComp from './components/FooterComp';

// function App() {
//   return (
//     <div>
//       <HeaderComp/>
//         <div className="container">
//           <UserComp/>
//         </div>
//       <FooterComp/>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
import UserComp from "./components/UserComp";
import AddUserComp from "./components/AddUserComp";
// import UpdateUserComponent from "./components/UpdateUserComponent";
// import LoginComponent from "./components/LoginComponent";
// import RegisterComponent from "./components/RegisterComponent";
// import UploadImageComponent from "./components/UploadImageComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UserComp}></Route>
            <Route path="/users" component={UserComp}></Route>
            <Route path="/add_user" component={AddUserComp}></Route>
            {/*<Route
              path="/update-users/:id"
              component={UpdateUserComponent}
            ></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/register" exact component={RegisterComponent}></Route>
            <Route
              path="/upload_photos"
              exact
              component={UploadImageComponent}
            ></Route> */}
          </Switch>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;