//let myLive = document.querySelector("#myLive")
let myLive = document.getElementById("myLive")

// If I had the microphone then my audio would work perfect, since I don't have one,
// these constraints won't work because of the audio part since I have nos such device
let constraints = {
    audio: true,
    video: {
        width: 800,height: 700
    }
}

// notice that the width here is the actual video,  the one in the html is the wrapper dimensions tha will wrap this
navigator.mediaDevices.getUserMedia({video: {
    width: 2500,height: 2000
}}).then(function(mediaStream){
    window.stream = mediaStream
    myLive.srcObject = mediaStream
    console.log("media stream: ",mediaStream)
}).catch(function(err){
    console.log(err)
})

/*
// other options , the mediasource style was causing some errors, I"ll work on that later on.
// you can convert a stream to a Response object, in order for you to append it to a buffer.
// after converting it to a response object, of course you can now access the arrayBuffer part of the response which you are meant to append to the source buffer

let mediaSource = new MediaSource()
let urlObject = window.URL.createObjectURL(mediaSource)
myLive.src = urlObject

mediaSource.addEventListener("sourceopen",function(e){
    navigator.mediaDevices.getUserMedia({video: {
        width: 100,height: 100
    }}).then(function(mediaStream){
        window.stream = mediaStream
        console.log("type of the video for media stream: ",typeof(mediaStream))
        let mediaSource = e.target
        console.log('are codecs supported: ',MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d401e, mp4a.40.2"'))
        let sourcebuffer = mediaSource.addSourceBuffer('video/mp4;codecs="avc1.4d401e, mp4a.40.2"')
        let buffer = new Response(mediaStream).arrayBuffer()
        sourcebuffer.appendBuffer(buffer)
        console.log("media stream: ",mediaStream)    
    }).catch(function(err){
        console.log(err)
    })
})*/