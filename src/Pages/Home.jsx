import React from 'react';
import Button from '../components/Button/button';
import Categories from '../components/Categories';
import PopUp from '../components/PopUp/PopUp';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <Link to='/cart'><Button click='buttonClick'/></Link> 
            <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
            <PopUp items={['популярности','цене','алфавиту']}/>
        </div>
    )
}

export default Home;