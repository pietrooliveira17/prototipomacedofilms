document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('vimeo-player-container');
    const triggers = document.querySelectorAll('.vimeo-trigger');
    const closeBtn = document.querySelector('.close-modal');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const vimeoId = this.getAttribute('data-vimeo-id');
            
            container.innerHTML = `
                <iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=556B2F&dnt=1" 
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                        frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                </iframe>`;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });


    const closeModal = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        modal.style.display = 'none';
        container.innerHTML = ''; 
        document.body.style.overflow = 'auto'; 
    };


    if (closeBtn) {
        closeBtn.addEventListener('pointerdown', closeModal);
    }

    
    modal.addEventListener('pointerdown', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

   
    checkCookies();
});


function checkCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'block';
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
    console.log("Cookies aceitos. Carregando scripts de marketing...");
}