import { useState, useEffect, useRef } from 'react'
import './space.css'
import { motion } from 'framer-motion'
import { drawSpaceStars } from '../particleGenerator/particleGenerator'

const Space = ( {findSetting} ) => {

  const size = findSetting('spaceSize');
  const expansionTime = findSetting('spaceExpansionTime');
  const rotateInterval = findSetting('spaceRotateInterval');
  const starsCount = findSetting('spaceStarsCount');
  const starsMinSize = findSetting('spaceStarsMinSize');
  const starsMaxSize = findSetting('spaceStarsMaxSize');

  const radius = size / 2;

  const [isExpandAnimationActive, setIsExpandAnimationActive] = useState(true);
  const canvasRef = useRef(null);

  const expandAnimation = {
    scale: [0, 1],
    initial: 1
  };
  const rotateAnimation = {
    rotate: [360, 0]
  };
  const expandTransition = {
    ease: 'linear',
    duration: expansionTime / 1000,
    type: 'tween'
  };
  const rotateTransition = {
    ease: 'linear',
    duration: rotateInterval / 1000,
    repeat: Infinity
  };

  const activeAnimation = isExpandAnimationActive ? expandAnimation : rotateAnimation;
  const activeTransition = isExpandAnimationActive ? expandTransition : rotateTransition;

  useEffect(() => {
    const canvas = canvasRef.current;
    drawSpaceStars(canvas, radius, starsCount, starsMinSize , starsMaxSize, expansionTime);
  }, [radius, starsCount, starsMinSize, starsMaxSize, expansionTime]);

  return (
    <motion.div className='spaceLayer' style={{ height: size, width: size }}
                animate={activeAnimation}
                transition={activeTransition}
                onAnimationComplete={() => {
                setIsExpandAnimationActive(!isExpandAnimationActive);
    }}
    >
       <canvas ref={canvasRef} width={size} height={size} />
    </motion.div>
  );
};

export default Space;