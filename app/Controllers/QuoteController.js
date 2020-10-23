import quoteService from "../Services/QuoteService.js"
import { ProxyState } from "../AppState.js"
//TODO Create methods for constructor, and rendering the quote to the page
export default class QuoteController {

  constructor() {
    try {
      console.log('Quote controller')
      quoteService.getQuote();
    } catch (error) {
      console.error(error)
    }
  }
}