document.querySelector('.discord').addEventListener('click', function() {
    var textArea = document.createElement('textarea');
    textArea.value = this.getAttribute('data-clipboard-text');
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    var notification = this.parentNode.querySelector('.copy-notification');
    notification.style.display = 'block';
    // Reset animation properties before applying them again
    notification.style.animation = 'none';
    notification.offsetHeight; /* trigger reflow */
    notification.style.animation = null; 
    setTimeout(function() {
    notification.style.animation = 'fadeOut 0.25s ease-out'; // Apply fade-out animation
        setTimeout(function() {
            notification.style.display = 'none'; // Hide notification after animation completes
        }, 250); // Fade out duration: 250ms
    }, 2000); // Hide notification after 2 seconds
});


document.querySelector('.discord').addEventListener('mouseenter', function() {
    var tooltip = this.parentNode.querySelector('.tooltip');
    tooltip.style.display = 'block';
});

document.querySelector('.discord').addEventListener('mouseleave', function() {
    var tooltip = this.parentNode.querySelector('.tooltip');
    tooltip.style.display = 'none';
});

document.querySelector('.discord').addEventListener('click', function() {
    var tooltip = this.parentNode.querySelector('.tooltip');
    tooltip.style.display = 'none';
});