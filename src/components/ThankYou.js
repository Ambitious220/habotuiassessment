import { useNavigate } from 'react-router-dom';

export const ThankYou = () => {
    const navigate = useNavigate();
    // Redirect to home after 5 seconds
    setTimeout(() => {
      navigate('/'); 
    }, 5000); 

  return (
    <form className="p-4 border rounded bg-light">
    <div className="thankyou-details-container">
        
        <h1>Thank You!</h1>
        <h4>Your request has been successfully submitted.</h4>
        </div>
    </form>
  )
}

