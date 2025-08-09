const btn = document.querySelector("i.menu");
const smallMenu = document.getElementById("small");
const theme = document.getElementById("theme");
const col = document.getElementById("col");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (smallMenu.style.display === "block") {
        smallMenu.style.display = "none";
        col.style.display = "none";
    } else {
        smallMenu.style.display = "block";
    }
});

theme.addEventListener("click", (e) => {
    e.stopPropagation();
    col.style.display = (col.style.display === "block") ? "none" : "block";
});

col.addEventListener("input", (e) => {
    changeMainColor(e.target.value);
});

smallMenu.addEventListener("click", (e) => e.stopPropagation());
col.addEventListener("click", (e) => e.stopPropagation());

document.body.addEventListener("click", () => {
    smallMenu.style.display = "none";
    col.style.display = "none";
});

function changeMainColor(newColor) {
    document.documentElement.style.setProperty('--main-color', newColor);
}
const savedColor = localStorage.getItem('mainColor');
if (savedColor) {
  changeMainColor(savedColor);
  col.value = savedColor; // sync color picker UI
}
col.addEventListener('input', (e) => {
    const newColor = e.target.value;
    changeMainColor(newColor);
    localStorage.setItem('mainColor', newColor);
  });
  const audio = document.getElementById('bgAudio');
  const unmuteBtn = document.getElementById('unmuteBtn');
  
  unmuteBtn.addEventListener('click', () => {
    if (audio.muted || audio.paused) {
      audio.muted = false;
      audio.play();
      unmuteBtn.textContent = "Mute Music";
    } else {
      audio.pause();
      audio.muted = true;
      unmuteBtn.textContent = "Unmute Music";
    }
  });
  const own=document.querySelector(".me")
  own.addEventListener("click", function() {
    window.open("https://www.instagram.com/yousif_kawa_/", "_blank"); 
  });
  