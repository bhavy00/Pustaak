import './App.css';
import Main from './components/main'
import Dashboard from './components/dashboard'
import Create from './components/createuser';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main islogged = {false} /> }></Route>
        <Route path='/dashboar' render={(props) => <Dashboard {...props}/>}></Route>
        <Route path='/signup' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
