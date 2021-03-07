import React from 'react';
import {pricestyle,priceafter} from '../util/pricestyle';
import Carousel from 'react-elastic-carousel';


const ElsticSlide = (props) => {
    const itemms=props.itemms;
    
const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 460, itemsToShow: 2},
    { width: 590, itemsToShow: 2},
    { width: 700, itemsToShow: 3},
    { width: 1200, itemsToShow: 3 }
  ];
  
    return (
<React.Fragment>
<Carousel enableAutoPlay autoPlaySpeed={4500}  pagination={false}
breakPoints={breakPoints}>
  {itemms.map(item => 
  <div key={item.id} className='elsti-item'>
      <div ><img width="200px" height="200px" src={item.image}/></div>
      <div >{item.name}</div>
    {item.discount!==0?(<div  ><span>%{item.discount}</span><span>{pricestyle(item.price)}</span></div>):(<div></div>)}
      <div ><span>{pricestyle(priceafter(item.price,1,item.discount))}</span><span>تومان</span></div>
      <div >افزودن به سبد خرید</div>
      </div>)}
</Carousel>
        </React.Fragment>
    );
};

export default ElsticSlide;








