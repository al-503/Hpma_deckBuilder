class EchoeService {
  constructor() {
    this.jsonPath = '../data/data_Echoes.json';
    this.parsedData = this.parseData(this.jsonPath);
  }

  async parseData(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
  }

  getParsedData() {
    return this.parsedData;
  }
}