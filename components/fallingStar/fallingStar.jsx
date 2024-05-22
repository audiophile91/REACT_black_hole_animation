import './fallingStar.css'
import { motion } from 'framer-motion'

const FallingStar = ({ x, y, size, onFinish, starLifeTme }) => {
  
  return (
    <motion.div
      className='star'
      style={{ height: size, width: size, left: x, top: y }}
      animate={{ opacity: [0, 1, 1, 1, 0], left: '50%', top: '50%' }}
      transition={{ duration: starLifeTme, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        onFinish()}}
    />
  );
};

export default FallingStar;