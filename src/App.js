import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {
  apiKey = process.env.REACT_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="soccer" pageSize={2}  q="soccer" />} />
            <Route exact path="/ucl" element={<News apiKey={this.apiKey} key="UEFA champions league" pageSize={2}  q="UEFA champions league" />} />
            <Route exact path="/epl" element={<News apiKey={this.apiKey} key="english premier league" pageSize={2}  q="english premier league" />} />
            <Route exact path="/afc" element={<News apiKey={this.apiKey} key="asian football confederation" pageSize={2}  q="asian football confederation" />} />
            <Route exact path="/isl" element={<News apiKey={this.apiKey} leagueKey="Indian Super League" pageSize={2}  q="Indian Super League" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
