import { BrowserRoute, Routes, Route} from 'react-router-dom';
//import ShowProducts from './Components/ShowProducts';
function App() {
  return (
    <BrowserRoute>
    <Routes>
      <Route path= '/' element = {<ShowProducts></ShowProducts>}></Route>
    </Routes>
    </BrowserRoute>
  );
}

export default App;
