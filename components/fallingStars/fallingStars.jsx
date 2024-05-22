import './fallingStars.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FallingStar from '../fallingStar/fallingStar';
import { pickCoordinates } from '../particleGenerator/particleGenerator';

const FallingStars = ({ findSetting }) => {
  const [drawStars, setDrawStars] = useState(false);
  const [stars, setStars] = useState([]);

  const removeStar = (indexToRemove) => {
    setStars((prevStars) => prevStars.filter((star, index) => index !== indexToRemove));
  };

  const spaceExpansionTime = findSetting('spaceExpansionTime'); 
  const holeExpansionTime = findSetting('holeExpansionTime'); 
  const totalExpansionTime = spaceExpansionTime + holeExpansionTime;

  const starsPerSecond = findSetting('starsPerSecond');
  const starGenerationInterval = 1000 / starsPerSecond;

  const spaceSize = findSetting('spaceSize');
  const holeRotateInterval = findSetting('holeRotateInterval');
  const holeProportion = findSetting('holeProportions');
  const starsRotateSpeedMultiplier = findSetting('starsRotateSpeedMultiplier');
  const starLifeTime = findSetting('starLifeTime');
  const spaceRadius = spaceSize / 2;
  const holeRadius = spaceRadius * holeProportion / 100;
  const starsRotateInterval = holeRotateInterval / starsRotateSpeedMultiplier;

  const starLifeSeconds = starLifeTime / 1000;

  useEffect(() => {
    const expansionTimeout = setTimeout(() => {
      setDrawStars(true);
    }, totalExpansionTime);

    return () => clearTimeout(expansionTimeout);
  }, [totalExpansionTime]); 

  useEffect(() => {
    const addStar = () => {
      const coordinates = pickCoordinates(spaceRadius, holeRadius);
      const size = Math.random() * 5;
      setStars((prevStars) => [...prevStars, { x: coordinates.x, y: coordinates.y, size:size }]);
    };

    const generationInterval = setInterval(addStar, starGenerationInterval);

    return () => clearInterval(generationInterval);
  }, [spaceRadius, holeRadius, starGenerationInterval]);

  return ( 
    drawStars &&
      <motion.div
        className='starsLayer'
        style={{ height: spaceSize, width: spaceSize }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: starsRotateInterval, repeat: Infinity, ease: 'linear' }}
      >
      {stars.map((star, index) => (
        <FallingStar key={`${star.x}-${star.y}`} x={star.x} y={star.y} size={star.size} starLifeTme={starLifeSeconds} onFinish={() => removeStar(index)}/>
      ))}
    </motion.div>
  );
};

export default FallingStars;