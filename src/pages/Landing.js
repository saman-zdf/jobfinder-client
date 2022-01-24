import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';

const Landing = () => {
  return (
    <>
      <main>
        <nav>
          <img src={logo} alt='Jobify' className='logo' />
        </nav>
        <div className='container page'>
          {/* Info */}
          <div className='info'>
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              In this application you can create job or show your interest to
              other's jobs. This is a prototype application that can help user
              to find their dream job. Easy to use and also with a lot
              informations.
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={main} alt='Job Hunt' className='img main-img' />
        </div>
      </main>
    </>
  );
};

export default Landing;
