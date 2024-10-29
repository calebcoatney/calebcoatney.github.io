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
const resultDisplay = document.getElementById('result');
const numSegments = rewards.length;
const segmentAngle = 360 / numSegments;
let isSpinning = false;

// Create segments with radial text
rewards.forEach((reward, index) => {
  const segment = document.createElement('div');
  segment.classList.add('segment');
  segment.style.backgroundColor = `hsl(${(index * 360) / numSegments}, 70%, 60%)`;
  segment.style.transform = `rotate(${index * segmentAngle}deg)`;

  const text = document.createElement('div');
  text.classList.add('segment-text');
  text.style.transform = `rotate(${segmentAngle / 2}deg)`;
  text.innerText = reward;

  segment.appendChild(text);
  wheel.appendChild(segment);
});

// Spin the wheel
spinButton.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  const randomRotation = 3600 + Math.floor(Math.random() * 360);
  const selectedSegment = Math.floor(((360 - randomRotation % 360) + (segmentAngle / 2)) / segmentAngle) % numSegments;

  wheel.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(() => {
    resultDisplay.innerText = `🎉 Reward: ${rewards[selectedSegment]}! 🎉`;
    isSpinning = false;
  }, 4000);
});
