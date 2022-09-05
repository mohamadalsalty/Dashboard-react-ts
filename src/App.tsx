import { Navbar } from './navbar';
import './App-styles.css'
import { Menu } from './menu';
import React, { Component } from 'react'
import { Profile } from './pages/Profile/Profile'
import {
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';

export class App extends Component {



  render() {
    return (
      <>
        <Navbar />
        <Menu />
        <div className="main_content" >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App
