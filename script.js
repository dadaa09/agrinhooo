```javascript
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;

    if(pos < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.8s ease";
});
```
