import './settingsShowButton.css'

const SettingsShowButton = ({displaySettings, setDisplaySettings}) => {
  
    const handleClick = () => {
        setDisplaySettings(!displaySettings);
    };
  
    return (
        <button className="showSettings" onClick={handleClick}>{
            (displaySettings ? "Hide" : "Show") + " Settings"
        }</button>
    );
  };
  
  export default SettingsShowButton;