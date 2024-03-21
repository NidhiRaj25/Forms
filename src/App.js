
// import './App.css';

import FormHeader from './components/FormHeader';
import Forms from './components/Forms';
import Template from './components/Template';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/form/:id" element= {
            <> <FormHeader/> <Forms/></>} />
            <Route path="/" element={<Template/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App