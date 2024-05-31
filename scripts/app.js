// Initialize the app ça peut etre dans app.js
document.addEventListener('DOMContentLoaded', () => {
  const app = new EchoeController(new EchoeModel(), new EchoeView(), new EchoeService());
  app.init();
});