import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  /* version 6 Routes is replaced with routes */
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ContactInfo from './Pages/ContactInfo';

function App() {
  //const [count, setCount] = useState(0);

  return (
 <React.Fragment>
 <Router>
 <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/contactInfo' element={<ContactInfo />} />
</Routes>
 </Router>
 </React.Fragment>
  );
}
export default App
