import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChildDetails from './components/ChildDetails';
import './App.css'; 
import { ServiceNeeds } from './components/ServiceNeeds';
import { ContactInformation } from './components/ContactInformation';
import {ThankYou} from './components/ThankYou'; 
import { useNavigate } from 'react-router-dom';

function App() {

const navigate = useNavigate();


  const initialFormData = {
  childAge: '',
  diagnosis: '',
  schoolType: '',
  supportType: '',
  frequency: '',
  specificRequirements: '',
  parentsName: '',
  email: '',
  phoneNumber: ''
};
 const [formData, setFormData] = useState(initialFormData);

  
//For handling form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

//For validating the form data
const isFormValid = () => {
  return (
    isChildDetailsFormValid() &&
    isServiceNeedsFormValid() &&
    isContactInfoFormValid()
  );
}

const isChildDetailsFormValid = () => {
  const { childAge, diagnosis, schoolType } = formData;
  const age = Number(childAge);
  return (
    !isNaN(age) &&
    age >= 1 &&
    diagnosis.trim() !== '' &&
    schoolType !== ''
  );
}

const isServiceNeedsFormValid = () => {
  const { supportType, frequency, specificRequirements } = formData;
  return supportType && frequency && specificRequirements.trim() !== '';
}


const isContactInfoFormValid = () => {
  const { parentsName, email, phoneNumber } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  return (
    parentsName.trim() !== '' &&
    emailRegex.test(email) &&
    phoneRegex.test(phoneNumber)
  );

};

const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
          
            console.log('Form submitted successfully:', formData);
            navigate('/ThankYou'); // Navigate to Thank You pag
            setFormData(initialFormData); // Reset form data
        }
        else {
            console.log('Please fill out all fields correctly.');
            return;

        }
    }


  return (
    
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChildDetails" element={<ChildDetails formData={formData} handleChange={handleChange} isFormValid={isChildDetailsFormValid} />} />
        <Route path="/ServiceNeeds" element={<ServiceNeeds formData={formData} handleChange={handleChange} isFormValid={isServiceNeedsFormValid} />} />
        <Route path="/ContactInformation" element={<ContactInformation formData={formData} handleChange={handleChange} isFormValid={isContactInfoFormValid} handleSubmit={handleSubmit}/>} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
   
  );
}

export default App;
