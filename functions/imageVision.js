const axios = require('axios')
const key = require('./apikey.json')
const imageVision = function (imageUri) {
  var requestJson = {
    'requests': [{
      'image': {
        'source': {
          'imageUri': imageUri
        }
      },
      'features': [
        {
          'type': 'LANDMARK_DETECTION',
          'maxResults': 1
        },
        {
          'type': 'WEB_DETECTION',
          'maxResults': 5
        }, {
          'type': 'IMAGE_PROPERTIES'
        }, {
          'type': 'LABEL_DETECTION'
        }, {
          'type': 'FACE_DETECTION'
        }, {
          'type': 'LOGO_DETECTION'
        }, {
          'type': 'TEXT_DETECTION'
        }, {
          'type': 'DOCUMENT_TEXT_DETECTION'
        }
      ]
    }]
  }
  return axios.post('https://vision.googleapis.com/v1/images:annotate?key=' + key['key'], requestJson)
}
module.exports = imageVision
