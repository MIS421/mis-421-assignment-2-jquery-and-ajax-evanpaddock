var len;
var results = '';

function apiSearch() {
    results = ''
    
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "7d3db6fafd0f4ac48084bb0edafc8df5");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog({
                height: 400,
                width: 600,
                modal: true,
                title: `Search Results`,
            });
        })
        .fail(function () {
            alert("error");
        });
}
function backgroundImageChanger() {

    // Get a reference to the element
    var element = document.body;

    // Get the computed style of the element
    var computedStyle = window.getComputedStyle(element);

    // Extract the background-image property
    var backgroundImage = computedStyle.getPropertyValue('background-image');

    // Use String methods to extract the image name
    var imageUrl = backgroundImage.match(/\/([^/]+)$/);
    var imageName = imageUrl ? imageUrl[1] : null;
    imageName = imageName.slice(0, -2)

    if (imageName == 'monke2.jpeg') {
        document.body.style.backgroundImage = 'url("./images/monke3.jpeg")'
    } else {
        document.body.style.backgroundImage = 'url("./images/monke2.jpeg")'
    }
}

function ChangeElementResultsVibility(elementName) {
    let visibilityCheck = document.getElementById(`${elementName}`).style.visibility
    if (visibilityCheck == 'hidden') {
        document.getElementById(`${elementName}`).style.visibility = 'visible'
    } else {
        document.getElementById(`${elementName}`).style.visibility = 'hidden'
    }
}

function QuerySearch() {
    ChangeElementResultsVibility("searchResults")
    apiSearch()
    document.getElementById("query").value = ''
    ChangeElementResultsVibility("searchResults")
}

// Function to update the textbox with the current time
function updateTimeTextBox() {
    ChangeElementResultsVibility("time")
    const currentTimeString = new Date().toLocaleTimeString();

    $('#time').text(currentTimeString);

    $('#time').dialog({
        title: "Current Time",
        modal: true,
    });
    ChangeElementResultsVibility("time")
}
function findLuckyBanana() {

    //Random between 1 and 10
    let randomChance = Math.floor(Math.random() * 10) + 1;

    if (randomChance === 7) {
        window.open("./images/golden-banana.jpg", "Window Title", "width=500, height=500")
    }
    else {
        var params = {
            "q": $("#query").val(),
            "count": "50",
            "offset": "0",
            "mkt": "en-us"
        };

        $.ajax({
            url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "7d3db6fafd0f4ac48084bb0edafc8df5");
            },
            type: "GET",
        })
            .done(function (data) {
                window.open(data.webPages.value[0].url, '_blank')
            })
            .fail(function () {
                alert("error");
            });
    }
}
