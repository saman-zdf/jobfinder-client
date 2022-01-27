import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
// set up import from the get go will be more usefull then using the autocomplete
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='' />
        <h3>ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
