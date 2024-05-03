

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
        random_number_r=Math.floor(Math.random()*255)+1
        random_number_g=Math.floor(Math.random()*255)+1
        random_number_b=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML='I can hear - '+result[0].label
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(result[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        img=document.getElementById('animals')

        if (result[0].label=="Background Noise") {
            img.src='Human_right_ear.jpg'
        } else if (result[0].label=="cat"){
            img.src='catty.jpg'
        } else if(result[0].label=="dog"){
            img.src='doggy.jpg'

        } 
    }
}
function modelRReady(){
    classifier.classify(gotResults)} 