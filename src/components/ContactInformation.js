import { useNavigate } from 'react-router-dom';


export const ContactInformation = ({formData, handleChange, isFormValid, handleSubmit}) => {
    const navigate = useNavigate();
    

    return (
        <>
            <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                <div className="contact-details-container">
                    <h1>Contact Information</h1>
                    <label className="labels">Parents Name:</label>
                    <input
                        type="text"
                        name="parentsName"
                        value={formData.parentsName}
                        onChange={handleChange}
                        placeholder="Enter parent's name"
                        className="form-control form-control-sm"
                    />
                    <label className="labels">Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email address" required
                        className="form-control form-control-sm"
                    />
                    

                    <label className="labels">Phone Number:</label>
                    <input
                        type="tel"
                        maxLength="10"  
                        pattern='[0-9]{10}'
                        required
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                        placeholder="Enter 10-digit number"
                       
                    />
                    <div className="button-container mt-3">
                        <button className="btn btn-primary" onClick={() => navigate('/ServiceNeeds')}>Previous</button>
                        <button className="btn btn-primary" type="submit" disabled={!isFormValid()} onClick={handleSubmit}> Submit</button>
                    </div>
                </div>
            </form>
        </>
    )

};