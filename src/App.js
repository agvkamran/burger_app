import './App.css';
import Header from './components/Header';
// import Categories from './components/Categories';
// import PopUp from './components/PopUp/PopUp';
// import Button from './components/Button/button';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import {Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'><Header /></Link>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact /> 
          {/* <Header /> */}
          {/* <Button click='buttonClick'/> 
         <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
        <PopUp items={['популярности','цене','алфавиту']}/> */}
      </div>
 </BrowserRouter>
  );
}

export default App;





