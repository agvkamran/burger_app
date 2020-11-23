// import Categories from './components/Categories';
// import PopUp from './components/PopUp/PopUp';
// import Button from './components/Button/button';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import axios from 'axios';
import { setBurgers as setBurgersAction } from './redux/actions/burgersAC';
import { connect } from 'react-redux';
// function App() {
//   const [burgers, setBurgers] = React.useState([]);
  
//   React.useEffect(() => {
    // axios.get('http://localhost:3000/db.json')
    // .then(({data}) => {
    //   setBurgers(data.pizzas);
    // });
//   }, []);
  
//   return (
//     <BrowserRouter>
//       <div className="app_container">
//         <Header />
//         <Route path='/' render={() => <Home items={burgers} />} exact />
//         <Route path='/cart' component={Cart} exact /> 
//       </div>
//     </BrowserRouter>
//   );
// }


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => {
      this.props.setBurgers(data.burgers);
    });
  }
  render () {
    console.log(this.props);
    return (
      <BrowserRouter>
      <div className="app_container">
        <Header />
        <Route path='/' render={() => <Home items={this.props.items} />} exact />
        <Route path='/cart' component={Cart} exact /> 
      </div>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.burgers.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  setBurgers: (items) => dispatch(setBurgersAction(items))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);





  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(jsonObject => {
  //     setBurgers(jsonObject.pizzas);
  //   });
  // }, []);

   {/* <Header /> */}
          {/* <Button click='buttonClick'/> 
         <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
        <PopUp items={['популярности','цене','алфавиту']}/> */}