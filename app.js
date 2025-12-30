window.addEventListener("load", () => {
  console.log("app.js užsikrovė");

  const btn = document.getElementById("reserveBtn");
  const form = document.getElementById("form");
  const save = document.getElementById("save");

  if (!btn || !form || !save) {
    alert("Klaida: nerandu reserveBtn/form/save. Patikrink index.html ID.");
    return;
  }

  btn.addEventListener("click", () => {
    form.style.display = "block";
    alert("Forma atidaryta");
  });

  save.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (!date || !from || !to) {
      alert("Užpildyk visus laukus");
      return;
    }

    const reservation = { date, from, to };
    localStorage.setItem("reservation", JSON.stringify(reservation));

    alert("Rezervacija išsaugota");
    form.style.display = "none";
  });
});
