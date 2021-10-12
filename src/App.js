import React, {useEffect} from 'react';
import {HashRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header";
import Login from "./pages/Login";
import News from "./pages/News";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import {useDispatch} from "react-redux";
import {login} from "./redux/actions/UserActions";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))
    if (isAuth){
      dispatch(login())
    }
  }, [dispatch])
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/news" component={News} isAuth={false}/>
      <Route exact path="/login" component={() => <Login />} />
    </Router>
  );
};

export default App;