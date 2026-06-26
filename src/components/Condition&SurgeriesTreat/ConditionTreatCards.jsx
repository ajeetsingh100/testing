import { Swiper, SwiperSlide } from 'swiper/react';

import conditionTreat from '../../Data/conditionTreat';


import ConditionAndSurgeriesCard from './ConditionAndSurgeriesCard';





const ConditionTreatCards=() => {
  return (
     <div>
        <div>
          <div className='d-flex flex-column flex-wrap border-top-0 border border-1 border-dark ' style={{height:"400px",boxShadow:'0px 0px 3px black'}}>
              {
                conditionTreat?.map(data=>          
                    <ConditionAndSurgeriesCard title={data.title} description={data.description}/>          
                )
              }
        </div> 
        </div>  
     </div>
  );
};

export default ConditionTreatCards;