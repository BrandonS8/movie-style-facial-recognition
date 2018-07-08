function detect() {
  const tracker = new tracking.ObjectTracker('face')

  let pic = document.querySelector('#pic')

  let faceDetect = tracking.track(pic, tracker)
  faceDetect.on('track', function(event) {
    if (event.data.length === 0) {
      console.log('none detected')
    } else {
      event.data.forEach(face => {
        let faceInfo = document.createElement('div')
        faceInfo.classList.add('faceInfo')
        faceInfo.style.width = `${face.width * 4}px `
        faceInfo.style.height = `${face.height}px`
        faceInfo.style.left = `${pic.offsetLeft + face.x}px`
        faceInfo.style.top = `${pic.offsetTop + face.y}px`
        let box = document.createElement('div')
        box.classList.add('box')
        faceInfo.appendChild(box)
        let infoRight = document.createElement('div')
        infoRight.classList.add('infoRight')
        let nameTag = document.createElement('h1')
        nameTag.innerHTML = faker.name.findName()
        nameTag.style.fontSize = `${face.width / 6}px`
        nameTag.classList.add('tag')
        let sAddress = document.createElement('h1')
        sAddress.innerHTML = faker.address.streetAddress()
        sAddress.style.fontSize = `${face.width / 7}px`
        sAddress.classList.add('tag')
        let cAddress = document.createElement('h1')
        cAddress.innerHTML = `${faker.address.city()}, ${faker.address.state()}`
        cAddress.style.fontSize = `${face.width / 7}px`
        cAddress.classList.add('tag')
        let alias = document.createElement('h1')
        alias.innerHTML = `Aka: ${faker.internet.userName()}, ${faker.name.findName()} `
        alias.style.fontSize = `${face.width / 8}px`
        alias.classList.add('tag')

        faceInfo.appendChild(infoRight)
        infoRight.appendChild(nameTag)
        infoRight.appendChild(sAddress)
        infoRight.appendChild(cAddress)
        infoRight.appendChild(alias)
        document.querySelector('.image-holder').appendChild(faceInfo)
      })
    }
  })
}

document.querySelector('#detect').addEventListener('click', detect)
