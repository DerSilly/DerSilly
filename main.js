// Sample TypeScript code for the background
const sampleCode = `
// Senior Full Stack Developer
interface Developer {
  name: string;
  role: "Full Stack Developer";
  experience: number;
  skills: string[];
}

const me: Developer = {
  name: "John Doe",
  role: "Full Stack Developer",
  experience: 8,
  skills: [
    "React", "Node.js",
    "TypeScript", "PostgreSQL",
    "AWS", "Docker"
  ]
};
`;

// Skills data
const skills = [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 85 }
];

// Initialize code highlighting and setup page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize code highlighting
    const codeElement = document.getElementById('highlighted-code');
    if (codeElement) {
        codeElement.textContent = sampleCode;
        Prism.highlightElement(codeElement);
    }

    // Generate skills
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="skill-icon">
                        <path d="M12 13.5V18m0-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v4.5m-6-4.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v4.5m6-4.5V18m-6-4.5V18m12-10.5v.75m0 3.75v.75m0 3.75v.75M6 7.5v.75m0 3.75v.75m0 3.75v.75M6 7.5h12M6 12h12m-12 4.5h12"></path>
                    </svg>
                    <span>${skill.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-item').forEach(skill => {
        observer.observe(skill);
    });

    // Handle form submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for your message! This is a demo form.');
        });
    }

    // Animate background layers
    const cloudLayers = document.querySelectorAll('.cloud-layer');
    cloudLayers.forEach((layer, index) => {
        layer.style.animationDelay = `${index * -5}s`;
    });
});