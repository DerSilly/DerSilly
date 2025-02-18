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

// Initialize code highlighting
document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.getElementById('highlighted-code');
    if (codeElement) {
        codeElement.textContent = sampleCode;
        Prism.highlightElement(codeElement);
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
            // Add form handling logic here
            alert('Thanks for your message! This is a demo form.');
        });
    }

    // Animate background layers
    const cloudLayers = document.querySelectorAll('.cloud-layer');
    cloudLayers.forEach((layer, index) => {
        layer.style.animationDelay = `${index * -5}s`;
    });
});
