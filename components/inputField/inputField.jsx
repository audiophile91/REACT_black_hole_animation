import './inputField.css'

const InputField = ({ description, value, setValue, valueType }) => {
    const handleInputChange = (event) => {
      const newValue = parseInt(event.target.value);
      setValue(newValue);
    };

    return (
      <div className='inputSpace'>
        <label className="inputLabel">{description}</label>
        <input className='input'
          type={valueType}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    );
  }
    
  export default InputField;