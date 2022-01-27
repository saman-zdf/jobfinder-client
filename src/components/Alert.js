import { useAppConntext } from '../context/appContext';

const Alert = () => {
  const { alertType, alertText } = useAppConntext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
