import moment from 'moment';

const Job = ({ company, createdAt }) => {
  return (
    <>
      <h5>{company}</h5>
      <h5>{moment(createdAt).format('MMM Do, YYYY')}</h5>
    </>
  );
};

export default Job;
