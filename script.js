// Portfolio Data with YouTube video IDs and category-specific thumbnails
const portfolioItems = [
    {
        category: 'short-form',
        title: 'TikTok Ad Campaign',
        description: 'Engaging short-form content for social media virality',
        youtubeId: 'dQw4w9WgXcQ', // Example video ID
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/329df77d-f098-4ca1-bf68-dc5fbf80ad39.png'
    },
    {
        category: 'short-form',
        title: 'Instagram Reels',
        description: 'Trendy and eye-catching vertical videos',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dda4ebdd-44ff-4b26-bc8d-f629aed6cca5.png'
    },
    {
        category: 'long-form',
        title: 'Documentary Series',
        description: 'In-depth storytelling with cinematic quality',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f45b819-1072-4e9f-863b-11f9eee7f67c.png'
    },
    {
        category: 'long-form',
        title: 'YouTube Tutorial',
        description: 'Educational content with professional editing',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ace309c-dedb-4cf0-9298-fae7d663cd03.png'
    },
    {
        category: 'gaming',
        title: 'Gaming Montage',
        description: 'Epic gameplay highlights and compilation',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/086a0702-c68b-4a41-b280-86c3541806f8.png'
    },
    {
        category: 'gaming',
        title: 'Stream Highlights',
        description: 'Best moments from live gaming sessions',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0cbc96bd-9b43-47c8-b9d8-36ef8865fa2c.png'
    },
    {
        category: 'football',
        title: 'Player Highlights',
        description: 'Dynamic football skills and goals compilation',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69ee8e74-c22a-4c04-a7a4-b97735dcee2e.png'
    },
    {
        category: 'football',
        title: 'Match Analysis',
        description: 'Tactical breakdown with visual storytelling',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ad46b7c-2854-4319-b918-2960bd1769c1.png'
    },
    {
        category: 'ecommerce',
        title: 'Product Showcase',
        description: 'Professional eCommerce product demonstrations',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5dcdfdb7-08d5-4f43-8811-b599c57f33db.png'
    },
    {
        category: 'ecommerce',
        title: 'Brand Commercial',
        description: 'Compelling ads that drive conversions',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b611d225-69b9-4fd6-969f-038a6e0a5250.png'
    },
    {
        category: 'documentary',
        title: 'Historical Documentary',
        description: 'Rich storytelling with archival footage',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/afa5a044-ed26-40d0-a65d-b457aa46cf52.png'
    },
    {
        category: 'documentary',
        title: 'Travel Documentary',
        description: 'Immersive cultural experiences captured on film',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ab48b4b-b59f-4d95-bdb0-bea553f41a72.png'
    },
    {
        category: 'color-grading',
        title: 'Cinematic Grading',
        description: 'Hollywood-style color correction and grading',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50810a40-e38a-4333-a1ae-585f77c941b4.png'
    },
    {
        category: 'color-grading',
        title: 'Mood Enhancement',
        description: 'Emotional tone setting through color',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89029551-d5f0-4253-b4e4-8ef406aa19f9.png'
    },
    {
        category: 'anime',
        title: 'AMV Compilation',
        description: 'Anime music video with perfect sync',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/411c9e34-91ce-499c-8254-d16bc913e950.png'
    },
    {
        category: 'anime',
        title: 'Fan Edit',
        description: 'Creative anime scene compilation',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32aa0996-1616-41dc-8265-6731a01210dc.png'
    },
    {
        category: 'ads',
        title: 'Brand Campaign',
        description: 'Professional advertisement series',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f892713-aec9-49a7-ac05-fda22b4ad4b2.png'
    },
    {
        category: 'ads',
        title: 'Social Media Ads',
        description: 'Optimized ads for various platforms',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c43129fa-684c-4a20-a929-00988a30a1f3.png'
    }
];

// Initialize Portfolio
function initPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.category-btn');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const videoContainer = document.getElementById('videoContainer');
    const modalTitle = document.getElementById('modalTitle');

    // Render all items initially
    renderItems('all');

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-600'));
            filterButtons.forEach(btn => btn.classList.add('bg-slate-800'));

            // Add active class to clicked button
            button.classList.add('active', 'bg-indigo-600');
            button.classList.remove('bg-slate-800');

            // Filter items
            const category = button.getAttribute('data-category');
            renderItems(category);
        });
    });

    // Close modal functionality
    closeModal.addEventListener('click', () => {
        closeVideoModal();
    });

    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });

    function renderItems(category) {
        grid.innerHTML = '';

        const filteredItems = category === 'all'
            ? portfolioItems
            : portfolioItems.filter(item => item.category === category);

        filteredItems.forEach(item => {
            const col = document.createElement('div');
            col.className = 'portfolio-item group';
            col.innerHTML = `
                        <div class="bg-slate-800 rounded-2xl overflow-hidden shadow-xl h-full">
                            <div class="relative overflow-hidden">
                                <img src="${item.thumbnail}" alt="${item.title} - ${item.description}" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" onerror="this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ea236ce-26d6-43b3-a9ff-acf02fcf7a5e.png'" />
                                <div class="video-overlay absolute inset-0 flex items-center justify-center">
                                    <div class="play-btn w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700" data-video-id="${item.youtubeId}" data-title="${item.title}">
                                        <i class="fas fa-play text-white text-xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <span class="inline-block px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full mb-3">
                                    ${item.category.replace('-', ' ').toUpperCase()}
                                </span>
                                <h3 class="text-xl font-semibold text-white mb-2">${item.title}</h3>
                                <p class="text-gray-400">${item.description}</p>
                            </div>
                        </div>
                    `;
            grid.appendChild(col);
        });

        // Add click event to play buttons
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const videoId = btn.getAttribute('data-video-id');
                const title = btn.getAttribute('data-title');
                openVideoModal(videoId, title);
            });
        });
    }

    function openVideoModal(videoId, title) {
        modalTitle.textContent = title;
        videoContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
        videoModal.classList.remove('active');
        videoContainer.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initPortfolio();

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.portfolio-item, .floating').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
