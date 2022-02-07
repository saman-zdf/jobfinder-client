import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Job';
import { useAppContext } from '../context/appContext';
import moment from 'moment';
import JobInfo from './JobInfo';

const Job = ({
  company,
  createdAt,
  position,
  jobLocation,
  jobType,
  status,
  _id,
}) => {
  const { setDeleteJob, setEditJob } = useAppContext();
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      {/* content center later */}
      <div className='content'>
        <footer>
          <div className='action'>
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => setDeleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
