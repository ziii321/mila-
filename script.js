// Opening transition with countdown
window.addEventListener('load', () => {
  const countdownEl = document.getElementById('countdown');
  let count = 3;
  countdownEl.textContent = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
    } else {
      clearInterval(interval);
      const opening = document.getElementById('opening');
      opening.style.display = 'none';
    }
  }, 1000);
});

// Kejutan ketika tombol diklik
document.getElementById('surpriseBtn').addEventListener('click', () => {
  // Buat hati kecil-kecil bertaburan
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'floatUp 3s forwards ease-out';
  document.body.appendChild(heart);

  // Hapus setelah animasi selesai
  setTimeout(() => heart.remove(), 3000);
}

// CSS untuk animasi floatUp tambahan
const style = document.createElement('style');
style.innerHTML = `
  @keyframes floatUp {
    0%   { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
  }
`;
document.head.appendChild(style);