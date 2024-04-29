

function windy()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AxSGUSlkw/model.json', modelRReady)
}
function gotResults(error,result){
    if (error) {
        console.log(error)
    }
    else{
        console.log(result)
    }
}
function modelRReady(){
    classifier.classify(gotResults);
}