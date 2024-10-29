const rewards = [
  'Watch a funny video',
  'Cup of tea',
  '5-min chat',
  'Stretch break',
  'Go for a walk',
  'Snacks!',
  'Hug break',
  'Listen to a song'
];

const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');
const numSegments = rewards.length;
const segmentAngle = 360 / numSegments;

// Create segments with radial text
rewards.forEach((reward, index) => {
  const segment = document.createElement('div');
  segment.classList.add('segment');
  segment.style.transform = `rotate(${index * segmentAngle}deg)`;

  const text = document.createElement('div');
  text.classList.add('segment-text');
  text.style.transform = `rotate(${segmentAngle / 2}deg)`; // Offset text
  text.innerText = reward;

  segment.appendChild(text);
  wheel.appendChild(segment);
});

// Spin the wheel on button click
spinButton.addEventListener('click', () => {
  const randomRotation = 3600 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${randomRotation}deg)`;
});
