import { Link } from "react-router-dom";
import pyypl from '../images/pyypl-round.png';
  

const Login = () => {
  return <div className='App-header'>
    <img src={pyypl} className='pyyplLogo' alt='logo' />
    <Link to="dashboard" className="login">Navigate to Dashboard</Link>
  </div>;
};

export default Login;
