import './blackHole.css'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import { drawHoleStars } from '../particleGenerator/particleGenerator'

const BlackHole = ({ findSetting }) => {

    const [drawHole, setDrawHole] = useState(false);
    const [isExpandAnimationActive, setIsExpandAnimationActive] = useState(true);
  
    const spaceExpansionTime = findSetting('spaceExpansionTime');
    const spaceSize = findSetting('spaceSize');
    const proportions = findSetting('holeProportions');
    const expansionTime = findSetting('holeExpansionTime');
    const rotateInterval = findSetting('holeRotateInterval');
    const starsCount = findSetting('holeStarsCount');
    const starsMinSize = findSetting('holeStarsMinSize');
    const starsMaxSize = findSetting('holeStarsMaxSize');

    const canvasRef = useRef(null);

    const size = spaceSize * (proportions / 100);
    const radius = size / 2;

    const expandAnimation = {
      scale: [0, 1],
      initial: 1
    };
    const rotateAnimation = {
      rotate: [0, 360]
    };
    const expandTransition = {
      ease: 'linear',
      type: 'tween',
      duration: expansionTime / 1000
    };
    const rotateTransition = {
      ease: 'linear',
      duration: rotateInterval / 1000,
      repeat: Infinity
    };
  
    const activeAnimation = isExpandAnimationActive ? expandAnimation : rotateAnimation;
    const activeTransition = isExpandAnimationActive ? expandTransition : rotateTransition;

    useEffect(() => {
      const expansionTimeout = setTimeout(() => {
        setDrawHole(true);
      }, spaceExpansionTime);
  
      return () => clearTimeout(expansionTimeout);
    }, [spaceExpansionTime]); 

    useEffect(() => {
        if (drawHole === true){
        const canvas = canvasRef.current;
        drawHoleStars(canvas, radius, starsCount, starsMinSize , starsMaxSize, expansionTime);
        }
      }, [drawHole, radius, starsCount, starsMinSize, starsMaxSize, expansionTime]);
        
    return (
      drawHole && (
        <motion.div className='holeLayer' style={{ height: size, width: size }}
        animate={activeAnimation}
        transition={activeTransition}
        onAnimationComplete={() => {
        setIsExpandAnimationActive(!isExpandAnimationActive);
}}
>
<canvas ref={canvasRef} width={size} height={size} />
</motion.div>
      )
    );
  };
  
  export default BlackHole;