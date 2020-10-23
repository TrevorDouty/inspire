import quoteService from "../Services/QuoteService.js"
import { ProxyState } from "../AppState.js"
//TODO Create methods for constructor, and rendering the quote to the page


function _drawQuote() {
  // console.log(ProxyState.quote);
  document.getElementById('quote').innerHTML = ProxyState.quote.QuoteTemplate
}
export default class QuoteController {

  constructor() {
    ProxyState.on("quote", _drawQuote)
    this.getQuote();
  }
  getQuote() {
    try {
      // console.log('Quote controller')
      quoteService.getQuote();
    } catch (error) {
      console.error(error)
    }
  }
}
