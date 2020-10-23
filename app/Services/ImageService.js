import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"


//TODO create methods to retrieve data and save to the State
class ImageService {
  async getImage() {
    console.log('Image Service')
  }
}

const imageService = new ImageService();
export default imageService;