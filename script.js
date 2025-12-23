document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('vimeo-player-container');
    const triggers = document.querySelectorAll('.vimeo-trigger');
    const closeBtn = document.querySelector('.close-modal');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const vimeoId = this.getAttribute('data-vimeo-id');
            container.innerHTML = `
                        <iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=556B2F" 
                                style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                                frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                        </iframe>`;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';
        container.innerHTML = '';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target == modal) closeModal(); });
});

function checkCookies() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    
    console.log("Cookies aceitos. Carregando scripts de marketing...");
}

window.onload = checkCookies;