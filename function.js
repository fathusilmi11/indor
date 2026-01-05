function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('sidebar-overlay');

    if (window.innerWidth < 1024) {
        // Mobile: slide in/out
        sidebar.classList.toggle('active');
        overlay.classList.toggle('hidden');
    } else {
        // Desktop: collapse / expand
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('lg:ml-64');
        mainContent.classList.toggle('lg:ml-20');
    }
}

// Tutup sidebar otomatis saat klik menu di mobile
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            toggleSidebar();
        }
    });
});

// Handle resize window untuk reset sidebar di mobile
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar.classList.remove('active');
        overlay.classList.add('hidden');
    }
});