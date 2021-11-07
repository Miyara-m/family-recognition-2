Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });

    var camera = document.getElementById("camera");

    Webcam.attach('#camera')

    function captureImage(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>"';
                });
    }

    console.log('m15 version:' , m15.version);

    var classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/-W4Nr66Bp/');

    function modelLoaded() {
        console.log('Model Loaded!');
    }

    