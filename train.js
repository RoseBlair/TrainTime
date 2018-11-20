$(document).ready(function(){
    $("#submission").click(function() {
        event.preventDefault();

        var trainName = $("#trainName").val();
        var destination = $("#destination").val().trim();
        var firstTrainTime = $("#firstTrainTime").val().trim().replace(/:/g, "");
        var convertedTime = moment(firstTrainTime).format('HHmm');
        var frequency = parseInt("#frequency");

        // var trainName = 

        // sessionStorage.setItem(
        //   trainName: trainName

        // )

        // database.ref().on("value", function() {

        // });
    });



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

});
