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
        <div >
          <div className='d-flex flex-column flex-wrap border-top-0  border border-1 border-dark' style={{height:"405px",boxShadow:'0px 0px 3px black'}}>
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