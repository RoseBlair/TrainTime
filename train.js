$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyDfNKOO9uvFWZIe8Vqj7zbgoBO5YMcCDcQ",
        authDomain: "traintimer-e3824.firebaseapp.com",
        databaseURL: "https://traintimer-e3824.firebaseio.com",
        projectId: "traintimer-e3824",
        storageBucket: "traintimer-e3824.appspot.com",
        messagingSenderId: "26054581488"
        };
    
    firebase.initializeApp(config);

    // variable to reference the database.
    var database = firebase.database();


    // var nextTrain = 
    //  ("#arrivalTrain1").text(moment.diff(moment(nextTrain)));
    //  ("#minutesTrain1").text(nextTrain);

    var currentdate = new Date();
    var currentTime = "";
    currentTime = currentdate.getHours() + ":" + currentdate.getMinutes();


    setInterval(function() {
        $("#currentTime").html(currentTime);   
        }, 10000);


    $("#submission").click(function(currentTime) {
        event.preventDefault();

        var trainName = $("#trainName").val();
        
        var destination = $("#destination").val().trim();
        var firstTrainTime = $("#firstTrainTime").val().trim();
        var convertedTime = $(moment(firstTrainTime, 'HH:mm'));
        var frequency = $(parseInt("#frequency"));
        
        
        

            

        // var trainName = 

        // sessionStorage.setItem(
        //   trainName: trainName

        // )

        // database.ref().on("value", function() {

        // });
    });





});
