import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js"
import { api } from "../Services/AxiosService.js"


//TODO create methods to retrieve data and save to the State
class ImageService {
  async getImage() {
    // console.log('Image Service')
    let res = await api.get('images');
    // console.log(res.data)
    ProxyState.image = new Image(res.data);
  }
}

const imageService = new ImageService();
export default imageService;