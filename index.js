const tracker = new tracking.ObjectTracker('face')

let pic = document.querySelector('#pic')

console.log(pic.offsetLeft)
console.log(pic.offsetTop)

let faceDetect = tracking.track(pic, tracker)
faceDetect.on('track', function(event) {
  console.log(event)
  if (event.data.length === 0) {
    console.log('none detectd')
  } else {
    event.data.forEach(face => {
      let faceInfo = document.createElement('div')
      faceInfo.classList.add('faceInfo')
      faceInfo.style.width = `${face.width * 2}px `
      faceInfo.style.height = `${face.height * 2}px`
      faceInfo.style.left = `${pic.offsetLeft + face.x}px`
      faceInfo.style.top = `${pic.offsetTop + face.y}px`
      let infoRight = document.createElement('div')
      infoRight.classList.add('infoRight')
      infoRight.style.width = `50%`
      infoRight.style.height = `50%`

      let box = document.createElement('div')
      box.classList.add('box')
      box.style.width = `50%`
      box.style.height = `50%`
      console.log(face)
      console.log(box)
      faceInfo.appendChild(box)
      faceInfo.appendChild(infoRight)
      document.querySelector('.image-holder').appendChild(faceInfo)
    })
  }
})
console.log(faker.name.findName())
