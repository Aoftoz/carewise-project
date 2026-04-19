// Advanced animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observe elements
document.querySelectorAll('.stat-item, .competitor-table tbody tr').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Safe hover effects for table rows
document.querySelectorAll('.competitor-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = 'var(--carewise-bg)';
        Array.from(row.children).forEach(cell => {
            cell.style.transition = 'all 0.3s ease';
        });
    });
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = 'transparent';
    });
});
