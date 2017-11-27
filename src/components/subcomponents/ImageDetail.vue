<template>
  <el-tabs v-if='detailData' v-model='activeTabName'>
    <el-tab-pane label="Faces" v-if="face">
      <div v-for="(item,index) in face" :key="index">
        <div style="margin-bottom:1em;padding-bottom:0.5em;border-bottom: 2px solid #20a0ff;">
        <div>Face {{index+1}}</div>
        <div v-if="typeof detail[1] !=='object'" v-for="(detail,index) in Object.entries(item)" :key="index">
          {{detail[0]}} -- {{detail[1]}}
        </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label='Labels' v-if="labels">
      <el-row :key="index" v-for="(item,index) in labels" :gutter="10">
        <el-col :span="16">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="item.score*100">
          </el-progress>
        </el-col>
        <el-col :span="8">
          <span>{{item.description|captalize}}</span>
        </el-col>
      </el-row>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTabName: '',
      cropHint: '',
      face: '',
      imageProperties: '',
      labels: '',
      webDetection: '',
      detailData: '',
      rawData: { 'annotation': { 'cropHintsAnnotation': { 'cropHints': [{ 'boundingPoly': { 'vertices': [null, { 'x': 3774 }, { 'x': 3774, 'y': 2516 }, { 'y': 2516 }] }, 'confidence': 0.29999998, 'importanceFraction': 1.16 }] }, 'faceAnnotations': [{ 'angerLikelihood': 'VERY_UNLIKELY', 'blurredLikelihood': 'VERY_UNLIKELY', 'boundingPoly': { 'vertices': [{ 'x': 1945, 'y': 546 }, { 'x': 3302, 'y': 546 }, { 'x': 3302, 'y': 2124 }, { 'x': 1945, 'y': 2124 }] }, 'detectionConfidence': 0.99558216, 'fdBoundingPoly': { 'vertices': [{ 'x': 2078, 'y': 930 }, { 'x': 3090, 'y': 930 }, { 'x': 3090, 'y': 1942 }, { 'x': 2078, 'y': 1942 }] }, 'headwearLikelihood': 'VERY_UNLIKELY', 'joyLikelihood': 'VERY_UNLIKELY', 'landmarkingConfidence': 0.7922201, 'landmarks': [{ 'position': { 'x': 2340.5764, 'y': 1282.0085, 'z': -0.0017430555 }, 'type': 'LEFT_EYE' }, { 'position': { 'x': 2758.8735, 'y': 1227.4534, 'z': -68.54818 }, 'type': 'RIGHT_EYE' }, { 'position': { 'x': 2205.0417, 'y': 1194.5935, 'z': 62.376842 }, 'type': 'LEFT_OF_LEFT_EYEBROW' }, { 'position': { 'x': 2423.6707, 'y': 1169.1654, 'z': -94.35149 }, 'type': 'RIGHT_OF_LEFT_EYEBROW' }, { 'position': { 'x': 2618.9868, 'y': 1149.5345, 'z': -126.95567 }, 'type': 'LEFT_OF_RIGHT_EYEBROW' }, { 'position': { 'x': 2877.127, 'y': 1128.7657, 'z': -49.74235 }, 'type': 'RIGHT_OF_RIGHT_EYEBROW' }, { 'position': { 'x': 2530.6365, 'y': 1250.0504, 'z': -119.0178 }, 'type': 'MIDPOINT_BETWEEN_EYES' }, { 'position': { 'x': 2533.6396, 'y': 1468.6517, 'z': -242.57831 }, 'type': 'NOSE_TIP' }, { 'position': { 'x': 2564.565, 'y': 1634.5267, 'z': -153.15108 }, 'type': 'UPPER_LIP' }, { 'position': { 'x': 2579.5369, 'y': 1769.0764, 'z': -127.59966 }, 'type': 'LOWER_LIP' }, { 'position': { 'x': 2405.3599, 'y': 1695.5305, 'z': -11.836072 }, 'type': 'MOUTH_LEFT' }, { 'position': { 'x': 2767.9163, 'y': 1662.896, 'z': -66.73556 }, 'type': 'MOUTH_RIGHT' }, { 'position': { 'x': 2571.6677, 'y': 1688.0505, 'z': -125.27449 }, 'type': 'MOUTH_CENTER' }, { 'position': { 'x': 2684.3281, 'y': 1498.7325, 'z': -105.15661 }, 'type': 'NOSE_BOTTOM_RIGHT' }, { 'position': { 'x': 2428.2083, 'y': 1528.9834, 'z': -63.817364 }, 'type': 'NOSE_BOTTOM_LEFT' }, { 'position': { 'x': 2548.3835, 'y': 1540.7554, 'z': -152.82741 }, 'type': 'NOSE_BOTTOM_CENTER' }, { 'position': { 'x': 2335.7888, 'y': 1250.4423, 'z': -27.520958 }, 'type': 'LEFT_EYE_TOP_BOUNDARY' }, { 'position': { 'x': 2401.4055, 'y': 1286.6353, 'z': -10.096184 }, 'type': 'LEFT_EYE_RIGHT_CORNER' }, { 'position': { 'x': 2335.9724, 'y': 1308.8718, 'z': -4.2253604 }, 'type': 'LEFT_EYE_BOTTOM_BOUNDARY' }, { 'position': { 'x': 2264.0657, 'y': 1290.6117, 'z': 51.602985 }, 'type': 'LEFT_EYE_LEFT_CORNER' }, { 'position': { 'x': 2334.6396, 'y': 1279.3872, 'z': -10.70819 }, 'type': 'LEFT_EYE_PUPIL' }, { 'position': { 'x': 2738.306, 'y': 1209.3815, 'z': -94.446976 }, 'type': 'RIGHT_EYE_TOP_BOUNDARY' }, { 'position': { 'x': 2837.049, 'y': 1228.4275, 'z': -42.95643 }, 'type': 'RIGHT_EYE_RIGHT_CORNER' }, { 'position': { 'x': 2766.7766, 'y': 1255.0461, 'z': -72.0123 }, 'type': 'RIGHT_EYE_BOTTOM_BOUNDARY' }, { 'position': { 'x': 2682.9736, 'y': 1250.417, 'z': -53.145115 }, 'type': 'RIGHT_EYE_LEFT_CORNER' }, { 'position': { 'x': 2747.5457, 'y': 1236.9667, 'z': -80.10428 }, 'type': 'RIGHT_EYE_PUPIL' }, { 'position': { 'x': 2303.8853, 'y': 1133.0791, 'z': -41.9248 }, 'type': 'LEFT_EYEBROW_UPPER_MIDPOINT' }, { 'position': { 'x': 2739.6033, 'y': 1088.9979, 'z': -114.65292 }, 'type': 'RIGHT_EYEBROW_UPPER_MIDPOINT' }, { 'position': { 'x': 2190.5369, 'y': 1508.7075, 'z': 536.5121 }, 'type': 'LEFT_EAR_TRAGION' }, { 'position': { 'x': 3103.6409, 'y': 1416.0483, 'z': 384.14346 }, 'type': 'RIGHT_EAR_TRAGION' }, { 'position': { 'x': 2518.152, 'y': 1154.4777, 'z': -126.16587 }, 'type': 'FOREHEAD_GLABELLA' }, { 'position': { 'x': 2606.8833, 'y': 1949.6433, 'z': -76.72773 }, 'type': 'CHIN_GNATHION' }, { 'position': { 'x': 2233.0117, 'y': 1762.8474, 'z': 357.6434 }, 'type': 'CHIN_LEFT_GONION' }, { 'position': { 'x': 3056.9082, 'y': 1679.27, 'z': 220.36104 }, 'type': 'CHIN_RIGHT_GONION' }], 'panAngle': -9.411555, 'rollAngle': -5.526763, 'sorrowLikelihood': 'VERY_UNLIKELY', 'surpriseLikelihood': 'VERY_UNLIKELY', 'tiltAngle': 1.5816555, 'underExposedLikelihood': 'VERY_UNLIKELY' }, { 'angerLikelihood': 'VERY_UNLIKELY', 'blurredLikelihood': 'VERY_UNLIKELY', 'boundingPoly': { 'vertices': [null, { 'x': 1206 }, { 'x': 1206, 'y': 1599 }, { 'y': 1599 }] }, 'detectionConfidence': 0.9439034, 'fdBoundingPoly': { 'vertices': [{ 'y': 28 }, { 'x': 1061, 'y': 28 }, { 'x': 1061, 'y': 1226 }, { 'y': 1226 }] }, 'headwearLikelihood': 'POSSIBLE', 'joyLikelihood': 'VERY_UNLIKELY', 'landmarkingConfidence': 0.67849123, 'landmarks': [{ 'position': { 'x': 173.67282, 'y': 409.36502, 'z': -0.0038688157 }, 'type': 'LEFT_EYE' }, { 'position': { 'x': 697.6627, 'y': 482.14816, 'z': -4.4846025 }, 'type': 'RIGHT_EYE' }, { 'position': { 'x': 55.849674, 'y': 295.79483, 'z': 84.19335 }, 'type': 'LEFT_OF_LEFT_EYEBROW' }, { 'position': { 'x': 343.11945, 'y': 284.84222, 'z': -48.12756 }, 'type': 'RIGHT_OF_LEFT_EYEBROW' }, { 'position': { 'x': 573.0436, 'y': 316.9015, 'z': -50.03223 }, 'type': 'LEFT_OF_RIGHT_EYEBROW' }, { 'position': { 'x': 848.26373, 'y': 406.94556, 'z': 77.106575 }, 'type': 'RIGHT_OF_RIGHT_EYEBROW' }, { 'position': { 'x': 444.54373, 'y': 383.94556, 'z': -90.601585 }, 'type': 'MIDPOINT_BETWEEN_EYES' }, { 'position': { 'x': 405.91702, 'y': 590.15845, 'z': -317.68893 }, 'type': 'NOSE_TIP' }, { 'position': { 'x': 384.25568, 'y': 788.7137, 'z': -274.23657 }, 'type': 'UPPER_LIP' }, { 'position': { 'x': 371.56036, 'y': 968.47546, 'z': -301.74106 }, 'type': 'LOWER_LIP' }, { 'position': { 'x': 142.56236, 'y': 883.98535, 'z': -165.20018 }, 'type': 'MOUTH_LEFT' }, { 'position': { 'x': 605.35596, 'y': 933.17706, 'z': -164.2245 }, 'type': 'MOUTH_RIGHT' }, { 'position': { 'x': 376.8686, 'y': 874.131, 'z': -268.2056 }, 'type': 'MOUTH_CENTER' }, { 'position': { 'x': 561.9102, 'y': 712.5159, 'z': -152.19101 }, 'type': 'NOSE_BOTTOM_RIGHT' }, { 'position': { 'x': 237.55846, 'y': 666.2431, 'z': -148.63431 }, 'type': 'NOSE_BOTTOM_LEFT' }, { 'position': { 'x': 390.38675, 'y': 691.2395, 'z': -240.76454 }, 'type': 'NOSE_BOTTOM_CENTER' }, { 'position': { 'x': 207.41356, 'y': 364.90036, 'z': -18.865604 }, 'type': 'LEFT_EYE_TOP_BOUNDARY' }, { 'position': { 'x': 279.45712, 'y': 422.6408, 'z': 0.739343 }, 'type': 'LEFT_EYE_RIGHT_CORNER' }, { 'position': { 'x': 171.52083, 'y': 441.40512, 'z': -15.801595 }, 'type': 'LEFT_EYE_BOTTOM_BOUNDARY' }, { 'position': { 'x': 92.44051, 'y': 408.24255, 'z': 45.27291 }, 'type': 'LEFT_EYE_LEFT_CORNER' }, { 'position': { 'x': 195.04645, 'y': 400.1447, 'z': -12.419911 }, 'type': 'LEFT_EYE_PUPIL' }, { 'position': { 'x': 682.1188, 'y': 431.45517, 'z': -22.973104 }, 'type': 'RIGHT_EYE_TOP_BOUNDARY' }, { 'position': { 'x': 778.9913, 'y': 506.53223, 'z': 38.647167 }, 'type': 'RIGHT_EYE_RIGHT_CORNER' }, { 'position': { 'x': 694.2398, 'y': 510.8934, 'z': -19.378422 }, 'type': 'RIGHT_EYE_BOTTOM_BOUNDARY' }, { 'position': { 'x': 599.2249, 'y': 468.57532, 'z': -1.7673426 }, 'type': 'RIGHT_EYE_LEFT_CORNER' }, { 'position': { 'x': 681.7555, 'y': 468.16498, 'z': -17.220467 }, 'type': 'RIGHT_EYE_PUPIL' }, { 'position': { 'x': 207.73949, 'y': 223.8552, 'z': 7.5039673 }, 'type': 'LEFT_EYEBROW_UPPER_MIDPOINT' }, { 'position': { 'x': 721.18, 'y': 295.7433, 'z': 3.4887507 }, 'type': 'RIGHT_EYEBROW_UPPER_MIDPOINT' }, { 'position': { 'x': -156.67119, 'y': 786.8288, 'z': 479.9931 }, 'type': 'LEFT_EAR_TRAGION' }, { 'position': { 'x': 949.84186, 'y': 940.5739, 'z': 487.80453 }, 'type': 'RIGHT_EAR_TRAGION' }, { 'position': { 'x': 459.5156, 'y': 287.97803, 'z': -64.4056 }, 'type': 'FOREHEAD_GLABELLA' }, { 'position': { 'x': 332.7226, 'y': 1180.2274, 'z': -314.34967 }, 'type': 'CHIN_GNATHION' }, { 'position': { 'x': -135.28563, 'y': 1006.8574, 'z': 191.49548 }, 'type': 'CHIN_LEFT_GONION' }, { 'position': { 'x': 838.4682, 'y': 1145.1023, 'z': 181.49213 }, 'type': 'CHIN_RIGHT_GONION' }], 'panAngle': -0.53237426, 'rollAngle': 8.150228, 'sorrowLikelihood': 'VERY_UNLIKELY', 'surpriseLikelihood': 'VERY_UNLIKELY', 'tiltAngle': 20.645359, 'underExposedLikelihood': 'VERY_UNLIKELY' }], 'imagePropertiesAnnotation': { 'dominantColors': { 'colors': [{ 'color': { 'blue': 212, 'green': 189, 'red': 181 }, 'pixelFraction': 0.098466665, 'score': 0.1600021 }, { 'color': { 'blue': 229, 'green': 224, 'red': 224 }, 'pixelFraction': 0.19846667, 'score': 0.14152567 }, { 'color': { 'blue': 18, 'green': 17, 'red': 25 }, 'pixelFraction': 0.07486667, 'score': 0.06588887 }, { 'color': { 'blue': 32, 'green': 48, 'red': 67 }, 'pixelFraction': 0.027266666, 'score': 0.040295098 }, { 'color': { 'blue': 103, 'green': 45, 'red': 17 }, 'pixelFraction': 0.0025333334, 'score': 0.008698471 }, { 'color': { 'blue': 208, 'green': 199, 'red': 199 }, 'pixelFraction': 0.1112, 'score': 0.10317198 }, { 'color': { 'blue': 188, 'green': 160, 'red': 151 }, 'pixelFraction': 0.040866666, 'score': 0.080451876 }, { 'color': { 'blue': 31, 'green': 46, 'red': 76 }, 'pixelFraction': 0.027733333, 'score': 0.037813373 }, { 'color': { 'blue': 61, 'green': 80, 'red': 102 }, 'pixelFraction': 0.044066668, 'score': 0.037749365 }, { 'color': { 'blue': 92, 'green': 113, 'red': 138 }, 'pixelFraction': 0.06853333, 'score': 0.028336648 }] } }, 'labelAnnotations': [{ 'description': 'glasses', 'mid': '/m/0jyfg', 'score': 0.9589483 }, { 'description': 'vision care', 'mid': '/m/0h8jxfl', 'score': 0.904109 }, { 'description': 'youth', 'mid': '/m/021dfr', 'score': 0.80553865 }, { 'description': 'fun', 'mid': '/m/0ds99lh', 'score': 0.7610584 }, { 'description': 'girl', 'mid': '/m/05r655', 'score': 0.75358933 }, { 'description': 'child', 'mid': '/m/0ytgt', 'score': 0.7212808 }, { 'description': 'smile', 'mid': '/m/019nj4', 'score': 0.6902003 }, { 'description': 'student', 'mid': '/m/014cnc', 'score': 0.6264613 }, { 'description': 'health & beauty', 'mid': '/m/0ggk3_t', 'score': 0.5675732 }, { 'description': 'eyewear', 'mid': '/m/0j272k5', 'score': 0.5075087 }], 'webDetection': { 'visuallySimilarImages': [{ 'url': 'https://pbs.twimg.com/media/DNEgP4aVoAA_tVi.jpg' }], 'webEntities': [{ 'description': 'Glasses', 'entityId': '/m/0jyfg', 'score': 1.3241453 }] } }, 'name': '1511771520786.jpg', 'path': 'https://storage.googleapis.com/testproject-52cfa.appspot.com/images%2F1511771520786.jpg?GoogleAccessId=firebase-adminsdk-6b5r7@testproject-52cfa.iam.gserviceaccount.com&Expires=16730323200&Signature=W9v%2BguSGRUKhtQ0eTsB854sYKB1fdAyQPcx8QAYeX4zhIXxCz%2FyM25lywJOjMPCOVUeMaGtpYZ31SxlPNa2YzecljoTJY7CZiMLWEwXm6X6%2FgI%2BRpzIvS8EQqphtF77cgpmwxkfTVN7FTf6Pwe%2FMtxUyIW5BjvjnemYMd3Dcxq4lhM5Id7LtGf8sB3K%2FLhJTwQ6mUXrS6OGki2V9CdYbWnRaZA3DffbEUfFagNJmNTdkTZsYCzJEmePfg80QBhVnRzqEZ0FyKWeTpWsFcitBaTg4w%2FXJO%2B0JMxkcgEaMSV23bFXtHPSg7J8OAc5HEIc%2BxNRlj4A4YhyVmEnbGnitPQ%3D%3D', 'thumbnail': 'https://storage.googleapis.com/testproject-52cfa.appspot.com/images%2Fthumb_1511771520786.jpg?GoogleAccessId=firebase-adminsdk-6b5r7@testproject-52cfa.iam.gserviceaccount.com&Expires=16730323200&Signature=a%2BJ88QCyw2D3l5MNyv3MSn%2FU2yCO2IZCE8DhzAERi5mfR%2B41lLttQzFn2KgTYQNRfBX3lamnUGicmwR1VvALXcGV%2BJrDoux07qr2U%2BhM8zBXhNF368mHX8lidiuiltZt6wxzrU8DOxEXSRcBYrXPbicU%2F753ak6I2boPa7Gs59CtptMF6TGbbgXMo9Hj5E2eIE6EUaApJ43Lpfun1OcOSZtYt5VlVt3%2Blxi37RxbLgoBEx91Juw8%2BZvefICJVuVi2FLpjeXyOiuNhoHs88mGTBmIyz%2BwS06VjGKHCD4ja7RtYLK6TLRgAbZknRSN%2F8WHlPeC3DKVYZT5aJ%2ByQYqyzQ%3D%3D' }
    }
  },
  filters: {
    captalize: function (strValue) {
      return strValue.slice(0, 1).toUpperCase() + strValue.slice(1)
    }
  },
  created: function () {
    let self = this
    self.detailData = self.rawData.annotation
    let data = Object.entries(self.detailData)
    data.map(item => {
      if (item[0] === 'cropHintsAnnotation') {
        self.cropHint = item[1]
      } else if (item[0] === 'faceAnnotations') {
        self.face = item[1]
      } else if (item[0] === 'imagePropertiesAnnotation') {
        self.imageProperties = item[1]
      } else if (item[0] === 'labelAnnotations') {
        self.labels = item[1]
      } else if (item[0] === 'webDetection') {
        self.webDetection = item[1]
      }
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
