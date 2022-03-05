var speech = window.webkitSpeechRecognition;
var recognition = new speech();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}
function speak() {
    var api = window.speechSynthesis;
    var textarea = "taking your selfie in 5 seconds";
    var texttospeech = new SpeechSynthesisUtterance(textarea);
    api.speak(texttospeech);
    Webcam.attach(camera);
    setTimeout(function() 
    {
           take_pic();
           save()
    }, 5000);
}
Webcam.set({
    width:320,height:240,image_format:"png",png_quality:90
});
var camera=document.getElementById("camera");
function take_pic()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("pic").innerHTML="<img id='selfieimg' src="+data_uri+">";
    }
    );
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfieimg").src;
    link.href=image;
    link.click();
}