//let video = document.querySelector("#myVideo")
let myVideo = document.getElementById("myVideo")
/*video.addEventListener("click",function(e){
    alert("video clicked");
})*/

/*fetch("./videos/vida yangu triller.mp4").then(function(data){
    
})*/

if(window.MediaSource){
    console.log("mediasSource capability detected")
    let mediaSource = new MediaSource()
    let urlObject = URL.createObjectURL(mediaSource)
    //connect the urlObject to the video's src attribute
    myVideo.src = urlObject
    
    mediaSource.addEventListener("sourceopen",function(e){
        console.log("source opened")
        console.log(`are the codecs supported: ${MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d401e, mp4a.40.2"')}`)
        //do a URL cleanup first. since the connection is already created.
        //URL.revokeObjectURL(urlObject)
        let mediaSource = e.target
        // just learnt that you can use the same codecs for different container formats, e.g here I used the codecs from the webm container format.
        const sourcebuffer = mediaSource.addSourceBuffer('video/mp4;codecs="avc1.4d401e, mp4a.40.2"')
        fetch("\\dashFiles\\out.mpd").then(function(response){
            console.log("fetching begins")
            console.log(`response received: ${JSON.stringify(response)}`)
            //console.log(`the json part of the response: ${JSON.stringify(response.json())}`)
            return response.arrayBuffer()          
        }).then(function(arrayBuffer){
            //testing for the updateend
            sourcebuffer.addEventListener("updateend",function(e){
                console.log("update end reached")
                // this if part is not reached and I don't know why
                if(!sourcebuffer.updating && mediaSource.readyState === 'open'){
                    console.log('end of stream called.')// funny thing this if part is not reached
                    // I don't know what this endOfStream is for
                    mediaSource.endOfStream()
                }
                else{
                    console.log("end of stream not called")
                }
            })
            // Added this later
            if(mediaSource.readyState >= 3){
                console.log("stream ready to be played")
            }

            console.log(arrayBuffer.byteLength)
            console.log("appending is happening")
            sourcebuffer.appendBuffer(arrayBuffer)
            console.log(`type of the source buffer is: ${typeof(sourcebuffer)}`)
            /*if(sourcebuffer.updating){
                console.log("source buffer updating")
            }*/        

        }).catch(function(err){
            console.log("an error occured.")
            console.log("The error:-")
            console.log(err)
        })
        
    })
    mediaSource.addEventListener("sourceended",function(){
        console.log('the stream has been successfuly ended')
    })
    mediaSource.addEventListener('sourceclosed',function(){
        console.log("source has been closed no more media source to use")
    })
}
else{
    console.log("kindly buy a laptop")
}


// assigning the object url to the video tag
// ok actually assigning it directly also worked pretty well.
//myVideo.setAttribute("src",".\\videos\\vida yangu triller.mp4")
//myVideo.setAttribute("src",urlObject) // works pretty fine

// also directly setting the src works pretty fine.
//myVideo.src = ".\\videos\\vida yangu triller.mp4"
/*myVideo.src = urlObject

// assigning a video source for the media source.
// look for the coreect string required in a source buffer
let videoSource = mediaSource.addSourceBuffer("video/mp4/")

//ensure that each promise returns something for that something to be read by the other callback.
fetch("videos/vida yangu triller.mp4")
.then(data =>
    data.arrayBuffer()// make it an array buffer first before apending it.
).then(buffered => 
    videoSource.appendBuffer(buffered)
)

/*fetch("videos/vida yangu triller.mp4")
.then(data =>
    videoSource.appendBuffer(data)// make it an array buffer first before apending it.
)*/