import { useNavigate } from "react-router-dom";


const ChildDetails = ({ formData, handleChange, isFormValid }) => {
  const navigate = useNavigate();

  return (
    <>
      <form className="p-4 border rounded bg-light">
        <div className="child-details-container">
          <h1>Child Info</h1>

          <label className="labels" >Child Age:</label>
          <input type="number" onChange={(e) => {
            const value = e.target.value;
            // block 0 and negatives while typing
            if (value === '' || Number(value) >= 1) {
              handleChange(e);
            }
          }} min="1" name="childAge" value={formData.childAge || ''} />
          <label className="labels" >Diagnosis:</label>
          <input type="text" name="diagnosis" onChange={handleChange} value={formData.diagnosis || ''} />
          <label className="labels">Current School Type:</label>
          <label><input type="radio" name="schoolType" value="Public" onChange={handleChange} />Public</label>
          <label> <input type="radio" name="schoolType" value="Private" onChange={handleChange} />Private</label>
          <label> <input type="radio" name="schoolType" value="Home" onChange={handleChange} />Home</label>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/ServiceNeeds')} disabled={!isFormValid()} > Next</button>
        </div>

      </form>
    </>
  )
}

export default ChildDetails;