import './headercomponent.css'
export default function Navbar(){
    return(
      
<section className='top-navbar'>
<img alt='logo' className="logo" src={require('./logo.png')}></img>

<div className="right-div"> 
    <select className='navbar-dropdown'>
    <option>English</option>
    <option>Hindi</option>
    </select>
    <a href="https://github.com/jsx-esl" className="Sign-in"><p>Sign in</p></a> 
</div>
</section>
)
};
