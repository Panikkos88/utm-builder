function buildURL() {
    const source = document.getElementById('source').value;
    const medium = document.getElementById('medium').value;
    const campaign = document.getElementById('campaign').value;
    const term = document.getElementById('term').value;
    const content = document.getElementById('content').value;

    const utmParams = {
        source: encodeURIComponent(source),
        medium: encodeURIComponent(medium),
        campaign: encodeURIComponent(campaign),
        term: encodeURIComponent(term),
        content: encodeURIComponent(content),
    };

    const utmURL = `https://example.com/?utm_source=${utmParams.source}&utm_medium=${utmParams.medium}&utm_campaign=${utmParams.campaign}` +
        `${utmParams.term ? `&utm_term=${utmParams.term}` : ''}${utmParams.content ? `&utm_content=${utmParams.content}` : ''}`;

    document.getElementById('utmResult').value = utmURL;
    document.getElementById('result').classList.remove('hidden');
}
function handleSourceChange() {
    const sourceDropdown = document.getElementById('source');
    const customSourceContainer = document.getElementById('customSourceContainer');

    if (sourceDropdown.value === 'manual') {
        customSourceContainer.style.display = 'block';
    } else {
        customSourceContainer.style.display = 'none';
    }
}

function buildURL() {
    // Existing buildURL function logic
    // ...

    // You can access the custom source value here if needed
    const customSource = document.getElementById('customSource').value;
    console.log('Custom Source:', customSource);
}
