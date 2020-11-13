import React from 'react';
import Button from '../components/Button/button';
import Categories from '../components/Categories';
import PopUp from '../components/PopUp/PopUp';
import { Link } from 'react-router-dom';
import BurgerBlock from './BurgerBlock/BurgerBlock';

const Home = ({items}) => {
    console.log(items)
    return(
        <div>
            <Link to='/cart'><Button click='buttonClick'/></Link> 
            <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
            <PopUp items={['популярности','цене','алфавиту']}/>
            {
                items.map(obj =>  <BurgerBlock key={obj.id} {...obj} />)
            }
        </div>
    )
}

export default Home;