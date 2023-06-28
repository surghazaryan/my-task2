
import './App.css';
import MenuRouting from './compMenu/MenuRouting';
import { Provider } from "react-redux";
import store from './Redux/store';
import MainPage from './screen/MainPage';
import MainRouting from './routing/MainRouting';




function App() {


  return (
    <div className="App">
      {/* <MenuRouting/>  */}
     <Provider store={store}>
       <MainRouting/>
     </Provider>
    </div>
  );
}

export default App;
