/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import SettingsShowButton from '../components/settingsShowButton/settingsShowButton';
import SettingsForm from '../components/settingsForm/settingsForm';
import Settings from '../components/settings/settings';
import Space from '../components/space/space';
import BlackHole from '../components/blackHole/blackHole';
import FallingStars from '../components/fallingStars/fallingStars';

function App() {
  const [displaySettings, setDisplaySettings] = useState(false);
  const {settings, findSetting} = Settings();

  return (
    <div className='pageContent'>
        <SettingsShowButton displaySettings={displaySettings} setDisplaySettings={setDisplaySettings}/>
        {
          displaySettings ? 
          <SettingsForm settings={settings} setDisplaySettings={setDisplaySettings}/> :
          <>
            <Space findSetting={findSetting}/>
            <BlackHole findSetting={findSetting}/>
            <FallingStars findSetting={findSetting}/>
          </>
        }
    </div>
  )
}

export default App