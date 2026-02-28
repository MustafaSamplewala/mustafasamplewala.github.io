/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal");
const reveal = () => {
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", reveal);
reveal();

/* ANIMATED COUNTERS */
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const value = +counter.innerText;
    const inc = target / 40;
    if (value < target) {
      counter.innerText = Math.ceil(value + inc);
      setTimeout(update, 50);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* GITHUB API PROJECT LOADER */
fetch("https://api.github.com/users/MustafaSamplewala/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projectsContainer");
    data
      .filter(repo => !repo.fork)
      .slice(0, 6)
      .forEach(repo => {
        container.innerHTML += `
          <div class="glass-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "Machine Learning / Data Science Project"}</p>
            <span>${repo.language || "Python"}</span>
            <a target="_blank" href="${repo.html_url}">View on GitHub →</a>
          </div>`;
      });
  });

/* CERTIFICATE MODAL */
function openModal(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImg").src = src;
}
function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

/* GITHUB API PROJECT LOADER (OTHER PROJECTS ONLY) */
fetch("https://api.github.com/users/MustafaSamplewala/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projectsContainer");
    data
      .filter(repo => !repo.fork)
      .filter(repo => repo.description) // ignore empty repos
      .slice(0, 6)
      .forEach(repo => {
        container.innerHTML += `
          <div class="glass-card">
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <span>${repo.language || "Python"}</span>
            <a target="_blank" href="${repo.html_url}">
              View on GitHub →
            </a>
          </div>
        `;
      });
  });