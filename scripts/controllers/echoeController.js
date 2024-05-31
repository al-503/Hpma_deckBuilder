class EchoeController {
  constructor(EchoeModel, EchoeView, EchoeService) {
      this.EchoeModel = EchoeModel;
      this.EchoeView = EchoeView;
      this.EchoeService = EchoeService;
      // other
      this.echoe = [];
  }

  async init() {
      const data = await this.EchoeService.getParsedData();
      if (data) {
        this.EchoeModel.setData(data);  // Assuming Model has a setData method to store fetched data
        this.EchoeView.render(this.EchoeModel.getData());
    }      
  }
}
