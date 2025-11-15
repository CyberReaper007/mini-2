// Sidebar Toggle
document.getElementById('sidebarToggle')?.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Dropdown Menu Toggle
document.querySelectorAll('.dropdown-toggle').forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle('active');
        console.log('Dropdown toggled, active:', parentLi.classList.contains('active'));
    });
});

// Search Functionality
document.querySelector('.search-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    
    if (searchInput.trim()) {
        alert(`Searching for: ${searchInput}\n\nThis is a demo. In a real application, this would search the database for "${searchInput}".`);
    } else {
        alert('Please enter a search term.');
    }
});

// Download Button Handlers
document.querySelectorAll('.btn-success').forEach(function(button) {
    if (button.textContent.includes('Download')) {
        button.addEventListener('click', function() {
            const card = this.closest('.item-card');
            const itemName = card.querySelector('h5').textContent;
            
            alert(`Initiating download for: ${itemName}\n\nThis is a demo. In a real application, the download would start here.`);
        });
    }
});

// Request Form Handler
document.getElementById('requestForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const requestType = document.getElementById('requestType').value;
    const itemName = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const priority = document.getElementById('priority').value;
    
    if (!requestType || !itemName || !category) {
        alert('Please fill in all required fields.');
        return;
    }
    
    alert(`Request submitted successfully!

Type: ${requestType}
Item: ${itemName}
Category: ${category}
Priority: ${priority}

We'll review your request and add it to our library soon!`);
    
    // Reset form
    this.reset();
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.item-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
