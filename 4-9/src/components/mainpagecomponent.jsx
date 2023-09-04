import '../components/mainpagecomponent.css';
import Navbar from './headercomponent.jsx';
import Topbodycomponent from './bodycomponent';

export default function Mainpagecomponent(){
    return(
       
        <div className='mainpagecomponent'>
             <div className='mainpagecomponent-1'>
             <div>
                <Navbar />
                </div>
                <div>
                    <Topbodycomponent />
                </div>
             </div>
        </div>
        
        )
}