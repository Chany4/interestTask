document.querySelector('.intBtn').addEventListener('click', function() {
    // Get the input values
    const p = parseFloat(document.getElementById('p').value);
    const r = parseFloat(document.getElementById('r').value);
    const t = parseFloat(document.getElementById('t').value);
    
    // Calculate the interest
    const interest = (p * r * t) / 100;
    
    // Display the result
    document.querySelector('.intConv').innerText = interest + " %";
});