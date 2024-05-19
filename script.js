// Document Ready Function -- this is to ensure that the HTML is fully loaded before trying to use any js
// $ = this is basically the getElement or querySelector functions

// Grab the document (HTML) and check that it is ready:
$(document).ready(function() {

    /** ------------- JQUERY INTRODUCTION----------------- */

    // All of the JS is placed inside of here, this is a wrapper function;

    // example: change the color of all of the 'p' tags, to red once document is ready;

    /** Can use this for css, but mainly use it for JS */

    $("p").css("color", "red"); // all 'p' tags
    $("#one").css("color", "blue"); // first 'p' tag
    $("#two").css("color", "purple");
    $("#three").css("color", "green");
    $("#four").css("color", "pink");
    $("#five").css("color", "yellow");

    // styling the buttons
    $("button").css("padding", "10px");
    $("button").css("border-radius", "8px");
    $("button").css("border", "3px solid yellow");

    // body bg color off black
    $("body").css("background-color", "#1f1f1f");

    // Click events:
    

    // Click event to hide to hide 'p' tags
    $("#hideButton").click(function () {
        // my js for the click event goes here;
        $("p").hide();
    });

    // Click event to show 'p' tags
    $("#showButton").click(function () {
        // my js for click event goes here;
        $("p").show();
    });

    // Click event on alert button, pops up and alerts
    $("#alertButton").click(function () {
        alert('INTRUDER ALERT, INTRUDER ALERT!');
    });

    /** USE THIS FOR FORMS!!!! */
    // onChange of the username, update the usernameResult 'p' tag;
    $("#usernameInput").change(function (event) {
        $("#usernameResult").html(event.target.value); // this changes the html inside the 'p' tag
    });

    // onChange of the password, update the passwordResult 'p' tag;
    $("#passwordInput").change(function (event) {
        $("#passwordResult").html(event.target.value);
    });


    /** ------------DATEPICKER--------------- */

    // Initialize datepicker on the inputs:
    $("#startDate").datepicker({
        // formatting we want: dd-mm-yy
        dateFormat: "dd-mm-yy",
        onSelect: function() {
            const startDate = $("#startDate").datepicker("getDate");
            console.log(startDate);
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });


    $("#endDate").datepicker({
        // formatting we want: dd-mm-yy
        dateFormat: "dd-mm-yy",
        onSelect: function() {
            const endDate = $("#endDate").datepicker("getDate");
            console.log(endDate);
            // run the calculate function
           const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // Calculate the difference between the two dates:
    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate"); 
        const endDate = $("#endDate").datepicker("getDate");

        // check if we have a start date and an end date;
        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()); // makes sure that the number is a positive number
            console.log(timeDiff);

            // 1000 milliseconds per second 
            // 3600 seconds per hour
            // 24 hours in a day
            // 1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of milliseconds in a day = number of days
            // make sure the number of days is a whole number, we use Math.ceil()
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update number of days span
            $("#numberOfDays").text(diffDays);
            // return the diffDays to make it accessible to the populate function
            return diffDays;
        } else {
            // make sure the number of days is empty;
            $("#numberOfDays").text(""); // this sets it to empty
        }
    };



    /** --------- EXAMPLE OF USING DATE TO FILTER ---------- */

    const hotels = [
        {
            id: 1,
            name: "Hotel 1",
            minStay: 3,
            maxStay: 10,
        },
        {
            id: 2,
            name: "Hotel 2",
            minStay: 1,
            maxStay: 7,
        },
        {
            id: 3,
            name: "Hotel 3",
            minStay: 6,
            maxStay: 9,
        },
        {
            id: 4,
            name: "Hotel 4",
            minStay: 2,
            maxStay: 6,
        },
        {
            id: 5,
            name: "Hotel 5",
            minStay: 4,
            maxStay: 7,
        },
    ];

    function populateResults(diffDays) {
        // clear out the results div
        $("#results").html = ("");
        // run a for loop over the hotel array to do this for each hotel
        hotels.forEach(hotel => {
            // check if number of days entered by user is more than hotel min stay or less than hotel max stay
            if (diffDays >= hotel.minStay && diffDays <= hotel.maxStay) {
                $("#results").append(`<p> ${hotel.name} </p>`);
            } else {
                $("#results").append(``);
            }
        });
    };


});

/** THIS MAKES THE CLICK EVENTS SO MUCH EASIER ESPECIALLY FOR HIDE/SHOW EVENTS
 * DON'T USE IT ALL THE TIME
 */  