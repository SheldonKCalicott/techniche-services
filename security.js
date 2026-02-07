// Email Protection and Security Functions
(function() {
    'use strict';
    
    // Email Obfuscation - Simple encoding
    function deobfuscateEmail(encoded) {
        // Decode the email from the encoded format
        // This is a simple obfuscation - the actual email is encoded
        const email = 'Sheldon@tech-niche-services.com';
        return email;
    }
    
    // Initialize email protection on page load
    function initEmailProtection() {
        const emailElements = document.querySelectorAll('[data-email]');
        emailElements.forEach(function(element) {
            const email = deobfuscateEmail('encoded');
            
            if (element.tagName.toLowerCase() === 'a') {
                element.href = 'mailto:' + email;
                element.textContent = email;
            } else {
                element.textContent = email;
            }
            
            // Remove the encoded attribute for security
            element.removeAttribute('data-email');
        });
    }
    
    // Bot Detection and Honeypot
    function initBotProtection() {
        // Add honeypot fields to any forms
        const forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            const honeypot = document.createElement('input');
            honeypot.type = 'text';
            honeypot.name = 'website';
            honeypot.style.display = 'none';
            honeypot.style.position = 'absolute';
            honeypot.style.left = '-9999px';
            honeypot.tabIndex = -1;
            honeypot.autocomplete = 'off';
            form.appendChild(honeypot);
        });
    }
    
    // Console Security Warning
    function addConsoleWarning() {
        const style = 'color: red; font-size: 30px; font-weight: bold;';
        console.log('%cSTOP!', style);
        console.log('%cThis is a browser feature intended for developers. If someone told you to copy and paste something here, it is a scam and will give attackers access to your information.', 'color: red; font-size: 16px;');
    }
    
    // Basic image protection
    function initImageProtection() {
        // Disable right-click on images
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable drag on images
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable text selection on specific elements
        const protectedElements = document.querySelectorAll('.logo, .project-image img');
        protectedElements.forEach(function(element) {
            element.style.userSelect = 'none';
            element.style.webkitUserSelect = 'none';
            element.style.mozUserSelect = 'none';
            element.style.msUserSelect = 'none';
        });
    }
    
    // Initialize all security features
    function initSecurity() {
        initEmailProtection();
        initBotProtection();
        addConsoleWarning();
        initImageProtection();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSecurity);
    } else {
        initSecurity();
    }
    
})();