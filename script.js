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
    const website = document.getElementById('website').value;
    const source = getSourceValue();
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

    const utmURL = `${website}?utm_source=${utmParams.source}&utm_medium=${utmParams.medium}&utm_campaign=${utmParams.campaign}` +
        `${utmParams.term ? `&utm_term=${utmParams.term}` : ''}${utmParams.content ? `&utm_content=${utmParams.content}` : ''}`;

    document.getElementById('utmResult').value = utmURL;
    document.getElementById('result').classList.remove('hidden');
}

function getSourceValue() {
    const sourceDropdown = document.getElementById('source');
    const customSourceInput = document.getElementById('customSource');
    
    return sourceDropdown.value === 'manual' ? customSourceInput.value : sourceDropdown.value;
}
