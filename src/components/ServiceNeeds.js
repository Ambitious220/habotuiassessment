import { useNavigate } from 'react-router-dom';

export const ServiceNeeds = ({formData, handleChange, isFormValid}) => {
  const navigate = useNavigate();
  

  return (
    <>
      <form className="p-4 border rounded bg-light">
        <div className="service-details-container">
          <h1>Service Info</h1>

          <label className="labels">Type of Support Needed:</label>
          <label>
            <input
              type="radio"
              name="supportType"
              value="Speech"
              checked={formData.supportType === 'Speech'}
              onChange={handleChange}
            /> Speech
          </label>
          <label>
            <input
              type="radio"
              name="supportType"
              value="Occupation"
              checked={formData.supportType === 'Occupation'}
              onChange={handleChange}
            /> Occupation
          </label>
          <label>
            <input
              type="radio"
              name="supportType"
              value="Behavioral"
              checked={formData.supportType === 'Behavioral'}
              onChange={handleChange}
            /> Behavioral
          </label>
          <label>
            <input
              type="radio"
              name="supportType"
              value="Physical"
              checked={formData.supportType === 'Physical'}
              onChange={handleChange}
            /> Physical
          </label>

          <label className="labels">Preferred Frequency:</label>
          <select
            className="form-select"
            name="frequency"
            onChange={handleChange}
            value={formData.frequency}
          >
            <option value="">Select</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>

          <label className="labels">Specific Requirements:</label>
          <input
            type="text"
            maxLength="150"
            name="specificRequirements"
            value={formData.specificRequirements}
            onChange={handleChange}
            placeholder="Enter up to 150 characters"
            className="form-control"
          />

          <div className="button-container mt-3">
            <button
              className="btn btn-primary me-2"
              type="button"
              onClick={() => navigate('/ChildDetails')}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              type="button"
              disabled={!isFormValid()}
              onClick={() => navigate('/ContactInformation')}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
