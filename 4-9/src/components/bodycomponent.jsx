import './bodycomponent.css';

export default function Topbodycomponent(){
    return(
        <section className="Main-home">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="Search-panel">
        <input className="main-input-box" type="email" placeholder='Email address'></input>
        <button type="Submit">Get Started</button>
        </div>
        </section>
    )
}