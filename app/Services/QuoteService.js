import { ProxyState } from "../AppState.js"
import Quote from "../models/Quote.js"

//TODO create methods to retrieve data and update the State
class QuoteService {

  async getQuote() {
    console.log('Quote Service')
  }
}

const quoteService = new QuoteService();
export default quoteService;