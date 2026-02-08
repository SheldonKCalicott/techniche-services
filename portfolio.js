// Portfolio Project Collapse/Expand Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all portfolio projects as collapsed
    const portfolioProjects = document.querySelectorAll('.portfolio-project');
    
    portfolioProjects.forEach(function(project) {
        const description = project.querySelector('.project-description');
        const header = project.querySelector('.project-header');
        
        if (description && header) {
            // Create expand/collapse button
            const expandBtn = document.createElement('button');
            expandBtn.className = 'project-expand-btn';
            expandBtn.textContent = 'Show Details';
            expandBtn.setAttribute('aria-expanded', 'false');
            
            // Initially collapse the description
            description.classList.add('collapsed');
            
            // Insert button after project header
            header.insertAdjacentElement('afterend', expandBtn);
            
            // Add click handler
            expandBtn.addEventListener('click', function() {
                const isExpanded = description.classList.contains('expanded');
                
                if (isExpanded) {
                    // Collapse
                    description.classList.remove('expanded');
                    description.classList.add('collapsed');
                    expandBtn.textContent = 'Show Details';
                    expandBtn.setAttribute('aria-expanded', 'false');
                } else {
                    // Expand
                    description.classList.remove('collapsed');
                    description.classList.add('expanded');
                    expandBtn.textContent = 'Hide Details';
                    expandBtn.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });
});