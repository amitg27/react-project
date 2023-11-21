import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import ContactApp from './components/ContactApp';

function App() {
  return (
    <Fragment>
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <div className='sitename'>React with Server Connection</div>
    </nav>    
    <ContactApp/>
  </Fragment>
  );
}

export default App;
