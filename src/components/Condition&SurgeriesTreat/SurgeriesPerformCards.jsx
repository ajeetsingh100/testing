import { Swiper, SwiperSlide } from 'swiper/react';

import surgeriesPerform from '../../Data/surgeriesPerform';
// Import Swiper styles
import 'swiper/css';
import SwiperCore from "swiper";
import { Autoplay ,FreeMode} from "swiper/modules";
import ConditionAndSurgeriesCard from './ConditionAndSurgeriesCard';

SwiperCore.use([Autoplay]);




const SurgeriesPerformCards=() => {
  return (
     <div>
        <div className='row'>
          <div className='col d-flex flex-column flex-wrap' style={{height:'350px'}}>
              {
                surgeriesPerform?.map(data=>          
                    <ConditionAndSurgeriesCard title={data.title} description={data.description}/>          
                )
              }
        </div> 
        </div>  
     </div>

  );
};

export default SurgeriesPerformCards;