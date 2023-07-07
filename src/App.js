import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MultiForm from './Components/MultiForm/MultiForm';
import Chat from './Components/Chat/Chat';
import FormContextProvider from './Contexts/FormContext/FormContextProvider';

function App() {
  return (
    <FormContextProvider>
      <div className="App">
        <main>
          <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            <Route path = {'/diagnose'} element = {<MultiForm/>}/>
            <Route path={'/chat'} element={<Chat/>}/>
          </Routes>
        </main>
      </div>
    </FormContextProvider>
  );
}

export default App;
