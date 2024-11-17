
const quotes = [
  "A room without books is like a body without a soul― Marcus Tullius Cicero",
  "If you tell the truth, you don't have to remember anything. - Mark Twain",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
