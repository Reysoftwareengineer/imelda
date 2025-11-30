// ===== Page Navigation =====
function goTo(pageId) {
  document
    .querySelectorAll(".page-section")
    .forEach((s) => s.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");
}

// ===== Floating Hearts =====
const heartsBg = document.getElementById("hearts-bg");

function makeHeart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerText = "💙";

  const size = Math.random() * 18 + 10;
  const pos = Math.random() * window.innerWidth;

  h.style.left = pos + "px";
  h.style.fontSize = size + "px";
  h.style.animationDuration = Math.random() * 4 + 5 + "s";

  heartsBg.appendChild(h);

  setTimeout(() => h.remove(), 9000);
}

setInterval(makeHeart, 800);

// ===== Redirect to WhatsApp =====
function sendToWa() {
  const text = encodeURIComponent(
    "nggaa nyangkaa yaa, jadi nanti kita manggil apaa nihh sayanggg? sengg? bubbb? babyyy? panggil apaapunn yang penting orangnya kamuuuu💙"
  );
  window.location.href = `https://wa.me/6281333591707?text=${text}`;
}


// ===== Music Control =====
// ===== Music Control =====
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Fungsi untuk mulai musik (digunakan 1 kali)
function startMusic() {
  if (!isPlaying) {
    bgMusic.volume = 0.4; // volume awal
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        musicBtn.innerHTML = "🔊";
      })
      .catch(e => console.log("Autoplay blocked:", e));
  }
}

// Tombol play/pause manual
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.innerHTML = "🎵";
  } else {
    bgMusic.play();
    isPlaying = true;
    musicBtn.innerHTML = "🔊";
  }
});
