document.getElementById('generateButton').addEventListener('click', generateSearchString);

document.getElementById('keywordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateSearchString();
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    var resultText = document.getElementById('result').innerText.replace('Generated String: ', '');
    navigator.clipboard.writeText(resultText).then(function() {
        // Copy success, no alert shown
    }, function(err) {
        console.error('Error in copying text: ', err);
    });
});

function generateSearchString() {
    var keyword = document.getElementById('keywordInput').value.trim();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    var operators = ['inurl', 'intitle', 'intext', 'inanchor'];
    var result = operators.map(function(op) {
        return `${op}:"${keyword}"`;
    }).join(' ');

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<span class="label">Generated String:</span> ${result}`;

    // Show the copy button
    var copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'block';
}
