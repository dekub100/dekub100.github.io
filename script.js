document.addEventListener('DOMContentLoaded', function() {
    const discordButton = document.querySelector('.discord');
    const tooltip = discordButton.parentNode.querySelector('.tooltip');
    const notification = discordButton.parentNode.querySelector('.copy-notification');
    const textToCopy = 'dekub100'; // Change this to the text you want to copy

    discordButton.addEventListener('click', function() {
        copyToClipboard(textToCopy);
        showNotification(notification);
        hideTooltip(tooltip);
    });

    discordButton.addEventListener('mouseenter', function() {
        showTooltip(tooltip);
    });

    discordButton.addEventListener('mouseleave', function() {
        hideTooltip(tooltip);
    });

    function copyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed'; // Prevent scrolling to the bottom of the page in MS Edge.
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }

        document.body.removeChild(textArea);
    }

    function showNotification(notification) {
        notification.style.display = 'block';
        notification.style.animation = 'none';
        notification.offsetHeight; // trigger reflow
        notification.style.animation = null;

        setTimeout(function() {
            notification.style.animation = 'fadeOut 0.25s ease-out';
            setTimeout(function() {
                notification.style.display = 'none';
            }, 250); // Fade out duration: 250ms
        }, 2000); // Hide notification after 2 seconds
    }

    function showTooltip(tooltip) {
        tooltip.style.display = 'block';
    }

    function hideTooltip(tooltip) {
        tooltip.style.display = 'none';
    }
});

function toggleMobileNav() {
    const navButton = document.querySelector('.mobile-nav-button');
    const nav = document.querySelector('.mobile-nav');
    navButton.classList.toggle('open');
    nav.classList.toggle('mobile-nav-open');
}
