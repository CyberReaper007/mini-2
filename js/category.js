// Category Toggle Functionality
const softwareBtn = document.getElementById('softwareBtn');
const gamesBtn = document.getElementById('gamesBtn');
const softwareSection = document.getElementById('softwareSection');
const gamesSection = document.getElementById('gamesSection');

// Show Software
softwareBtn.addEventListener('click', function() {
    softwareSection.style.display = 'block';
    gamesSection.style.display = 'none';
    
    softwareBtn.classList.add('btn-primary', 'active');
    softwareBtn.classList.remove('btn-outline-primary');
    
    gamesBtn.classList.add('btn-outline-primary');
    gamesBtn.classList.remove('btn-primary', 'active');
});

// Show Games
gamesBtn.addEventListener('click', function() {
    softwareSection.style.display = 'none';
    gamesSection.style.display = 'block';
    
    gamesBtn.classList.add('btn-primary', 'active');
    gamesBtn.classList.remove('btn-outline-primary');
    
    softwareBtn.classList.add('btn-outline-primary');
    softwareBtn.classList.remove('btn-primary', 'active');
});
