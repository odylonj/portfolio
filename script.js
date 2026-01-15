const overlayDesktop = document.getElementById("desktopOverlay");
const closeDesktop = document.getElementById("closeDesktop");

const overlayInfo = document.getElementById("infoOverlay");
const closeInfo = document.getElementById("closeInfo");
const infoContent = document.getElementById("infoContent");

// clic hotspots
document.querySelectorAll(".hotspot").forEach(btn => {
  btn.addEventListener("click", () => {
    const go = btn.getAttribute("data-go");
    const open = btn.getAttribute("data-open");

    if (go) window.location.href = go;

    if (open === "desktop" && overlayDesktop) {
      overlayDesktop.classList.add("show");
      overlayDesktop.setAttribute("aria-hidden", "false");
    }

    if (open === "info" && overlayInfo) {
      overlayInfo.classList.add("show");
      overlayInfo.setAttribute("aria-hidden", "false");
    }
  });
});

// fermer overlay desktop
if (closeDesktop && overlayDesktop) {
  closeDesktop.addEventListener("click", () => {
    overlayDesktop.classList.remove("show");
    overlayDesktop.setAttribute("aria-hidden", "true");
  });

  overlayDesktop.addEventListener("click", (e) => {
    if (e.target === overlayDesktop) {
      overlayDesktop.classList.remove("show");
      overlayDesktop.setAttribute("aria-hidden", "true");
    }
  });
}

// fermer overlay info
if (closeInfo && overlayInfo) {
  closeInfo.addEventListener("click", () => {
    overlayInfo.classList.remove("show");
    overlayInfo.setAttribute("aria-hidden", "true");
  });

  overlayInfo.addEventListener("click", (e) => {
    if (e.target === overlayInfo) {
      overlayInfo.classList.remove("show");
      overlayInfo.setAttribute("aria-hidden", "true");
    }
  });
}

// tuiles info
document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const panel = tile.getAttribute("data-panel");
    if (!infoContent) return;

    if (panel === "cv") {
      infoContent.innerHTML = `
        <h2>CV</h2>
        <p><a href="./asset/cv/cv.pdf" target="_blank" rel="noopener">📄 Ouvrir le CV (PDF)</a></p>
      `;
    }

    if (panel === "skills") {
      infoContent.innerHTML = `
        <h2>Compétences (formation)</h2>
        <ul>
          <li>Java / JavaFX</li>
          <li>Web : HTML, CSS, JavaScript</li>
          <li>PHP / MVC</li>
          <li>SQL / Modélisation</li>
          <li>Git / GitHub</li>
        </ul>
      `;
    }
    if (panel === "contact") {
  infoContent.innerHTML = `
    <h2>Contact</h2>
    <ul>
      <li>Email : <a href="mailto:dylan.lebois7@gmail.com">dylan.lebois7@gmail.com</a></li>
      <li>GitHub : <a href="https://github.com/odylonj" target="_blank" rel="noopener">github.com/odylonj</a></li>
      
    </ul>
  `;


    }
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (overlayDesktop?.classList.contains("show")) {
    overlayDesktop.classList.remove("show");
    overlayDesktop.setAttribute("aria-hidden", "true");
  }

  if (overlayInfo?.classList.contains("show")) {
    overlayInfo.classList.remove("show");
    overlayInfo.setAttribute("aria-hidden", "true");
  }
});
// Option Windows: double-clic pour ouvrir les icônes
document.querySelectorAll("#desktopOverlay .icon").forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault(); // empêche ouverture au simple clic
  });
  a.addEventListener("dblclick", () => {
    window.location.href = a.getAttribute("href");
  });
});
