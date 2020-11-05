import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Header />
      <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
    </div>
  );
}

export default App;
