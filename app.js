console.log("Pickleball PWA veikia");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("Service Worker užregistruotas"))
      .catch(err => console.error("SW klaida", err));
  });
}
