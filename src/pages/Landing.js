import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* Info */}
          <div className='info'>
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              In this application you can create job or show your interest to
              other's jobs. This is a prototype application that can help users
              to find their dream jobs. Easy to use and also with a lot
              informations.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <div>
            <img src={main} alt='Job Hunt' className='img main-img' />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
