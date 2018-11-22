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

     
function getNextTrainTime(freqTrain1, firstTrainTime) {

    var freqTrain1 = parseInt($("#freqTrain1").text());
    console.log($("#freqTrain1").text());
    console.log(freqTrain1);

    var firstTrainTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");

    var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");

    console.log(diffTime);

    var trainRemainder = diffTime % freqTrain1;

    console.log(trainRemainder);

    var minutesLeft = freqTrain1 - trainRemainder;

    console.log(minutesLeft);

    var nextTrain = moment().add(minutesLeft, "minutes");

    console.log(moment(nextTrain).format("hh:mm"));

};



var firstTrainTime = "3:00";

var metroNorth = {name:"Fiat", model:"500", firstTrainTime: 3:00};
        

    //Show the arrival of the next train and the minutes to the next train in HTML. 

    // ("#arrivalTrain1").text(currentTime.diff(moment(nextTrain)));
    // ("#minutesTrain1").text(nextTrain);
        

    // // use moment to find the difference between current time and next train.

    //   function minutesTrain1(nextTrain) {
    //       var incoming = currentTime.diff(moment(nextTrain));
    //       $("#arrivalTrain1").html(incoming);
    //       };
    

    


    // setInterval(function() {
    //     $("#currentTime").html(currentTime);   
    //     }, 10000);


    // $("#submission").click(function(currentTime) {
    //     event.preventDefault();

    //     var trainName = $("#trainName").val();
        
    //     var destination = $("#destination").val().trim();
    //     var firstTrainTime = $("#firstTrainTime").val().trim();
    //     var convertedTime = $(moment(firstTrainTime, 'HH:mm'));
    //     var frequency = $(parseInt("#frequency"));
        
        
        

            

        // var trainName = 

        // sessionStorage.setItem(
        //   trainName: trainName

        // )

        // database.ref().on("value", function() {

        // });
    // });





});
