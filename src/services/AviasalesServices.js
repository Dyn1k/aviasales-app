class AviasalesServices {
  apiBase = 'https://aviasales-test-api.kata.academy';

  getSearchId = () => fetch(`${this.apiBase}/search`).then((res) => res.json());

  getTickets = (searchId) =>
    fetch(`${this.apiBase}/tickets?searchId=${searchId}`);
}

export default AviasalesServices;
