const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {

    cards.forEach(c => {
      if(c !== card){
        c.style.transform = "scale(0.9)";
        c.style.opacity = "0.6";
      }
    });

    card.style.transform = "scale(1.08)";
    card.style.zIndex = "2";
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach(c => {
      c.style.transform = "scale(1)";
      c.style.opacity = "1";
    });
  });
});

