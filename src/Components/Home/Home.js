import { Link } from 'react-router-dom';
import './Home.css'
import Logo from '../Logo/Logo';
const Home = () => {
    return (
        <section className='myHome'>
            <div className="top">
                <Logo/>
            </div>
            <div className="home">
                <h1>HI THERE!<span>LET'S GET YOU CHECKED OUT.</span></h1>
                <Link to={'/diagnose'}>GET STARTED</Link>
            </div>
        </section>
    );
}
export default Home;