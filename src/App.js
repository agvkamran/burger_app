import './App.css';
import Header from './components/Header';
import React from 'react';
// import Categories from './components/Categories';
// import PopUp from './components/PopUp/PopUp';
// import Button from './components/Button/button';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import axios from 'axios';

function App() {
  const [burgers, setBurgers] = React.useState([]);
  
  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(jsonObject => {
  //     setBurgers(jsonObject.pizzas);
  //   });
  // }, []);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => {
      // console.log(data);
      setBurgers(data.pizzas);
    });
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app_container">
        <Header />
        <Route path='/' render={() => <Home items={burgers} />} exact />
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





