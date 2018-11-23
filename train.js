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
    var trainData = firebase.database();


    $("#submission").on("click", function() {
        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrainTime = moment($("#firstTrainTime").val().trim(), "HH:mm").subtract(10, "years").format("X");
        var frequency = $("#frequency").val().trim();

        var newTrain = {
            trainName: trainName,
            destination: destination, 
            frequency: frequency, 
            firstTrainTime: firstTrainTime
        }

         trainData.ref().push(newTrain);
    });

    trainData.ref().on("child_added", function(snapshot) {
       
    
    var firstTrainTime = snapshot.val().firstTrainTime;
    var trainName = snapshot.val().trainName;
    var destination = snapshot.val().destination; 
    var frequency = snapshot.val().frequency; 

    var firstTrainTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");

    var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");

    var trainRemainder = diffTime % frequency;

    var minutesLeft = frequency - trainRemainder;

    var nextTrain = moment().add(minutesLeft, "minutes").format("HH:mm");

    
    console.log(minutesLeft);
    console.log(nextTrain);

    
    $("#trainTable > tBody").append("<tr><td>"+trainName+"</td><td>"+destination+"</td><td>"+frequency+"</td><td>"+nextTrain+"</td><td>"+minutesLeft+"</td></tr>");

    })


});
