import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import Book from './components/Book/Book';
import NoMatch from './components/NoMatch/NoMatch';
import LogIn from './components/LogIn/LogIn';
import BookList from './components/BookList/BookList';
import AddReview from './components/AddReview/AddReview';
import AddCourse from './components/AddCourse/AddCourse';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageService from './components/ManageService/ManageService';
import AddEmail from './components/AddEmail/AddEmail';
import Dashboard from './components/Dashboard/Dashboard';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path='/book/:id'>
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path='/book'>
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path='/bookList'>
            <BookList></BookList>
          </PrivateRoute>
          <PrivateRoute  path='/addReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute  path='/addCourse'>
            <AddCourse></AddCourse>
          </PrivateRoute>
          <Route path='/manage'>
            <ManageService></ManageService>
          </Route>
          <PrivateRoute  path='/email'>
            <AddEmail></AddEmail>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
