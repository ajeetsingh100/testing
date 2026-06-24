import { Swiper, SwiperSlide } from 'swiper/react';

import conditionTreat from '../../Data/conditionTreat';


import ConditionAndSurgeriesCard from './ConditionAndSurgeriesCard';





const ConditionTreatCards=() => {
  return (
     <div>
        <div className='row'>
          <div className='col d-flex flex-column flex-wrap' style={{height:'350px'}}>
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