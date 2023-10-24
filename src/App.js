import React from 'react';
import Home from './screens/Home';
import Register from './screens/Register';
import Category from './screens/Category';
import Contact from './screens/Contact';
import Course from './components/Course';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './screens/SignIn.tsx';


function App() {
  return (
    <Router>
      <div >
        <Routes>
          


          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/register" element={<SignIn />} /> */}
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/contact" element={<Contact />} />





        </Routes>

      </div>
    </Router>
  );
}

export default App;
