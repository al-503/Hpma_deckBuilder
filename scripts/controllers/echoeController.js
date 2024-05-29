class EchoeController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
  }

  async init() {
      const data = await this.model.parseData(this.model.jsonPath);
      this.view.render(data);
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const app = new EchoeController(new EchoeModel(), new EchoeView());
  app.init();
});