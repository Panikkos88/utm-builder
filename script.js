document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    var selectElems = document.querySelectorAll('select');
    var instancesSelect = M.FormSelect.init(selectElems);
});

function buildURL() {
    // Your existing code to build the URL
    var utmURL = generateUTMURL();

    // Display the generated URL in the textarea
    document.getElementById('utmResult').value = utmURL;

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
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

function copyToClipboard() {
    var copyText = document.getElementById('utmResult');
    copyText.select();
    document.execCommand('copy');
    M.toast({ html: 'URL copied to clipboard!', classes: 'rounded' });
}

function handleSourceChange() {
    var source = document.getElementById('source').value;

    // Toggle visibility of custom source input based on the selected source
    var customSourceContainer = document.getElementById('customSourceContainer');
    if (source === 'manual') {
        customSourceContainer.style.display = 'block';
    } else {
        customSourceContainer.style.display = 'none';
    }
}

function handleMediumChange() {
    var medium = document.getElementById('medium').value;

    // Toggle visibility of custom medium input based on the selected medium
    var customMediumContainer = document.getElementById('customMediumContainer');
    if (medium === 'manual') {
        customMediumContainer.style.display = 'block';
    } else {
        customMediumContainer.style.display = 'none';
    }
}
