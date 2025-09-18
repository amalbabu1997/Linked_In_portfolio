// Select the controls and sections
const controls = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');

// Function to handle section switching
function activateSection() {
    controls.forEach(control => {
        control.addEventListener('click', (e) => {
            const id = e.target.closest('.control').dataset.id;
            
            // Remove 'active-btn' from all controls
            document.querySelector('.active-btn').classList.remove('active-btn');
            control.classList.add('active-btn');
            
            // Hide all sections and remove animation class
            sections.forEach(section => {
                section.classList.remove('active-section');
                section.style.display = 'none';
            });

            // Show and animate the selected section
            const selectedSection = document.querySelector(`.${id}`);
            selectedSection.style.display = 'block';
            
            setTimeout(() => {
                selectedSection.classList.add('active-section');
            }, 10);
        });
    });
}

// Initialize default section
function initializeDefault() {
    document.querySelector('.section.sec1').style.display = 'block';
    document.querySelector('.section.sec1').classList.add('active-section');
}

// Call functions
activateSection();
initializeDefault();
