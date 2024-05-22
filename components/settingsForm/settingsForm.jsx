import { useState } from 'react';
import InputField from '../inputField/inputField'
import './settingsForm.css'

const SettingsForm = ({ settings, setDisplaySettings }) => {
    const [localValues, setLocalValues] = useState(settings.map(setting => setting.value));
  
    const setLocalValueAtIndex = (index, value) => {
      setLocalValues(prevState => {
        const newState = [...prevState];
        newState[index] = value;
        return newState;
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      for (let i = 0; i < localValues.length; i++) {
        settings[i].setValue(localValues[i]);
      }
      setDisplaySettings(false);
    };
  
    return (
      <div className='settingsContent'>
        <form className='settingsForm'
              onSubmit={handleSubmit}>
          <div>
            <h1 className='formHeader'>Black Hole Settings</h1>
            <div className='settingsFields'>
              {settings.map((setting, index) => (
                <InputField
                key={index}
                description={setting.description}
                value={localValues[index]}
                setValue={(value) => setLocalValueAtIndex(index, value)}
                valueType={setting.type}
              />
              ))}
            </div>

          
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> 
    );
  };

export default SettingsForm;