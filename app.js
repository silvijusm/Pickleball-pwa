console.log("Pickleball PWA veikia");

window.addEventListener("load", () => {
  // Service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("Service worker užregistruotas"))
      .catch((err) => console.error("SW klaida:", err));
  }

  // Mygtukas "Rezervuoti"
  const btn = document.getElementById("reserveBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Veikia! Toliau darysime rezervacijos formą.");
    });
  } else {
    console.warn("Nerastas reserveBtn mygtukas (patikrink index.html).");
  }
});
