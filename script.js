document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    var selectElems = document.querySelectorAll('select');
    var instancesSelect = M.FormSelect.init(selectElems);

    // Load previously stored URLs on page load
    loadStoredURLs();
});

function buildURL() {
    // Your existing code to build the URL
    var utmURL = generateUTMURL();

    // Save the generated URL to local storage
    saveURLToStorage(utmURL);
}

function generateUTMURL() {
    var websiteURL = document.getElementById('website').value;
    var source = document.getElementById('source').value;
    var medium = document.getElementById('medium').value;
    var customSource = document.getElementById('customSource').value;
    var customMedium = document.getElementById('customMedium').value;

    // Build the UTM parameters
    var utmParameters = [
        'utm_source=' + (source === 'manual' ? customSource : source),
        'utm_medium=' + (medium === 'manual' ? customMedium : medium),
        // Add other UTM parameters here
    ];

    // Combine the UTM parameters into the URL
    var utmURL = websiteURL + '?' + utmParameters.join('&');

    // Display the generated URL in the textarea
    document.getElementById('utmResult').value = utmURL;

    // Show the result section
    document.getElementById('result').classList.remove('hidden');


    return utmURL;
}

function saveURLToStorage(url) {
    // Get existing stored URLs or initialize an empty array
    var storedURLs = JSON.parse(localStorage.getItem('storedURLs')) || [];

    // Add the new URL to the array
    storedURLs.push(url);

    // Save the updated array back to local storage
    localStorage.setItem('storedURLs', JSON.stringify(storedURLs));

    // Load the updated list of stored URLs
    loadStoredURLs();
}

function loadStoredURLs() {
    // Get stored URLs from local storage
    var storedURLs = JSON.parse(localStorage.getItem('storedURLs')) || [];

    // Display the stored URLs in a separate tab or section
    displayStoredURLs(storedURLs);
}

function displayStoredURLs(urls) {
    // Display the stored URLs in a separate tab or section
    var storedURLsContainer = document.getElementById('storedURLsContainer');
    if (storedURLsContainer) {
        storedURLsContainer.innerHTML = '<h4>Stored URLs:</h4>';
        if (urls.length > 0) {
            var ul = document.createElement('ul');
            urls.forEach(function (url) {
                var li = document.createElement('li');
                li.textContent = url;
                ul.appendChild(li);
            });
            storedURLsContainer.appendChild(ul);
        } else {
            storedURLsContainer.innerHTML += '<p>No stored URLs.</p>';
        }
    }
}
