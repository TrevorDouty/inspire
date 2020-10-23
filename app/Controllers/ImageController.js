import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  document.getElementById("image").style.backgroundImage = `url(${ProxyState.image.large_url})`
}
export default class ImageController {

  constructor() {
    ProxyState.on('image', _drawImage)
    this.getImage();
  }

  getImage() {
    try {
      // console.log('image controller')
      imageService.getImage();
    } catch (error) {
      console.error(error)
    }
  }
}