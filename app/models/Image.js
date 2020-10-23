export default class Image {

  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.large_url = data.large_url || data.url
    this.source_id = data.source_id
    this.copyright = data.copyright
    this.site = data.site

  }



}


// "id": 378,
// "url": "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n7fg2vYZ741st5lhmo1_1280.jpg",
// "large_url": "https://splashbase.s3.amazonaws.com/unsplash/large/1ux49b6",
// "source_id": 250,
// "copyright": "CC0",
// "site": "unsplash"