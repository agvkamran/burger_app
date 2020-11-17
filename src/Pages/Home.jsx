import React from 'react';
import Categories from '../components/Categories';
import PopUp from '../components/PopUp/PopUp';
import BurgerBlock from './BurgerBlock/BurgerBlock';

const Home = ({items}) => {
    // console.log(items)
    return(
        <div>
            <Categories onClickItem={(item) => {console.log(item)}} items={['Гамбургер','Чизбургер','Чикенбургер','Фишбургер','Классический','Чёрный бургер']} />
            {
                items.map(obj =>  <BurgerBlock key={obj.id} {...obj}/>)
            }
        </div>
    )
}

export default Home;