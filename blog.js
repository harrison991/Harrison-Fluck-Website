document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post[data-category]');
    const noPosts = document.getElementById('no-posts');

    const filterPosts = (category) => {
        let visible = 0;

        blogPosts.forEach((post) => {
            const shouldShow = category === 'all' || post.dataset.category === category;
            post.style.display = shouldShow ? 'block' : 'none';
            if (shouldShow) visible += 1;
        });

        if (noPosts) {
            noPosts.style.display = visible === 0 ? 'block' : 'none';
        }
    };

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts(button.dataset.filter || 'all');
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (!emailInput || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            alert('Subscribed! You will hear about new posts soon.');
            newsletterForm.reset();
        });
    }
});
