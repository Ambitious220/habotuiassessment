import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
 

  return (
    <div className="home-container">
      <h1>Welcome to Habot Service Request Form</h1>
      <h2>Click Next to Proceed..!!</h2>
      <button className='btn btn-primary' onClick={() => navigate('/ChildDetails')}>Next</button>
    </div>
  );
};

export default Home;
