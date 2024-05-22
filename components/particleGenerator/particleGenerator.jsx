
function drawCircles(canvas, radius, particlesCount, minSize, maxSize, r, g, b, minA, maxA) {
    if (!canvas.getContext) {
      console.error('Canvas not supported');
      return;
    }
    
    const firstThreshold = radius / 20;
    const secondThreshold = radius / 10;

    const minRadius = minSize / 2;
    const maxRadius = maxSize / 2;

    const pratialRadius = maxRadius - minRadius;
    const partialAlfa = maxA - minA;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    const maxDistance = radius * 0.95;

    for (let i = 0; i < particlesCount; i++) {

      const angle = Math.random() * 2 * Math.PI;
      let distance;
  
      do {
        distance = distance = Math.random() * radius;
      } while (distance > maxDistance)

      const distanceMultiplier = distance < firstThreshold ? 10 : distance < secondThreshold ? 5 : 1;

      distance *= distanceMultiplier;

      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
  
      const circleRadius = Math.random() * pratialRadius + minSize;
    
      const alpha = Math.random() * partialAlfa + minA
      console.log(alpha);

      ctx.beginPath();
      ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fill();
      ctx.stroke();
    }
  }

function drawCirclesWithDuration(canvas, radius, particlesCount, minSize, maxSize, r, g, b, minA, maxA, duration) {  
  
  let drawnParticles = 0;

  const startTime = performance.now();

  const drawNextFrame = () => {
    if (drawnParticles === particlesCount) return;

    const actualTime = performance.now();
    const elapsedTime = actualTime - startTime;
    const timeDelta = elapsedTime / duration;
    const targetDrawnParticles = Math.floor(particlesCount * (timeDelta > 1 ? 1 : timeDelta));

    const particlesToDraw = targetDrawnParticles - drawnParticles;

    drawCircles(canvas, radius, particlesToDraw, minSize, maxSize, r, g, b, minA, maxA);

    drawnParticles += particlesToDraw;

    requestAnimationFrame(drawNextFrame);
  };
  drawNextFrame();
}

function drawSpaceStars(canvas, radius, particlesCount, minSize, maxSize, duration){
    return drawCirclesWithDuration(canvas, radius, particlesCount, minSize, maxSize, 255, 255, 255, 64, 255, duration); 
}

function drawHoleStars(canvas, radius, particlesCount, minSize, maxSize, duration){
    return drawCirclesWithDuration(canvas, radius, particlesCount, minSize, maxSize, 30, 30, 30, 0, 255, duration); 
}

function pickCoordinates(spaceRadius, holeRadius)
{
  let distance;

  console.log(spaceRadius);
  console.log(holeRadius);
  
  do {
    distance = Math.random() * spaceRadius;
    console.log(distance);
  } while (distance < holeRadius)

  const angle = Math.random() * 2 * Math.PI;

  const x = spaceRadius + distance * Math.cos(angle);
  const y = spaceRadius + distance * Math.sin(angle);

  return { x, y };
}

export { drawHoleStars, drawSpaceStars, pickCoordinates };