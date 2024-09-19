import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loginform from './Loginform.jsx';
import Registerform from './Registerform.jsx';
import MakePostInterface from './MakePostInterface.jsx';
import Postinterface from './Postinterface.jsx'
import PostViewer from './PostViewer.jsx'
import HomePage from './HomePage.jsx'

const url = import.meta.env.VITE_SERVER_URL + "/echo";

function App() {
  const [data, setData] = useState({});

  const [showHome, setShowHome] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMakePost, setShowMakePost] = useState(false);
  const [showViewPosts, setShowViewPosts] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
     axios.post(url, {
        message: "server is online"
      }).then(function(response){
        console.log(response)
        setData(response.data);
      }).catch(function(error){
        console.error('Error fetching data:', error);
        alert(error.name + " " + error + " " + url)
        setData(error);
    });
  };
  
    return (
      <span>
        <span>
          <button onClick = {e => {
              e.preventDefault(); 
              setShowRegister(false);
              setShowLogin(false);
              setShowMakePost(false);
              setShowViewPosts(false);
              setShowHome(true);
            }}>
            home
          </button>
          <button onClick = {e => {
            e.preventDefault(); 
            setShowRegister(true);
            setShowLogin(false);
            setShowMakePost(false);
            setShowViewPosts(false);
            setShowHome(false);
          }}>
            register
          </button>
          <button onClick = {e => {
            e.preventDefault(); 
            setShowRegister(false);
            setShowLogin(true);
            setShowMakePost(false);
            setShowViewPosts(false);
            setShowHome(false);
          }}>
            login
          </button>
          <button onClick = {e => {
            e.preventDefault(); 
            setShowRegister(false);
            setShowLogin(false);
            setShowMakePost(true);
            setShowViewPosts(false);
            setShowHome(false);
          }}>
            make post
          </button>
          <button onClick = {e => {
            e.preventDefault(); 
            setShowRegister(false);
            setShowLogin(false);
            setShowMakePost(false);
            setShowViewPosts(true);
            setShowHome(false);
          }}>
            view posts
          </button>
          <button onClick = {e => {
            Cookies.remove('username');
            Cookies.remove('token');
            alert("logged out");
          }}>
          log out
          </button>
        </span>
        <span>
            <h1>React + Node.js Integration</h1>
            <p>{data.message}</p>
        </span>
        <p>{import.meta.env.VITE_SERVER_URL}</p>
        {showRegister && <Registerform/>}
        {showLogin && <Loginform/>}
        {showMakePost && <MakePostInterface/>}
        {showViewPosts && <PostViewer/>}
        {showHome && <HomePage/>}
      </span>
    );
}

export default App
