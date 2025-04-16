// Team member card animation functionality
document.addEventListener('DOMContentLoaded', function () {
  // Select all team member cards
  const teamCards = document.querySelectorAll('#team .bg-white.dark\\:bg-slate-900.rounded-lg');

  // Set up staggered delay for social icons animations
  const socialLinks = document.querySelectorAll('#team .flex.space-x-3 a');
  socialLinks.forEach((link, index) => {
    link.style.setProperty('--i', index);
  });

  // Add click listeners to each card for flip effect
  teamCards.forEach((card) => {
    // Add click handler for card flip
    card.addEventListener('click', function () {
      // Create back card content if it doesn't exist yet
      if (!this.querySelector('.card-back')) {
        const name = this.querySelector('h3').textContent;
        const role = this.querySelector('p.text-primary, p.dark\\:text-blue-400').textContent;
        const bio = this.querySelector('p.text-gray-600, p.dark\\:text-gray-400').textContent;

        // Create the back of the card
        const backCard = document.createElement('div');
        backCard.className = 'card-back';

        // Add content to the back card
        backCard.innerHTML = `
          <h3 class="text-xl font-bold mb-2">${name}</h3>
          <p class="font-medium mb-4">${role}</p>
          <p class="text-center mb-6">${bio}</p>
          <div class="mt-4">
            <p class="text-sm mb-3">Contact directly:</p>
            <div class="flex justify-center space-x-4">
              <a href="mailto:${name.toLowerCase().replace(/\s+/g, '.')}@emathrix.com" 
                 class="contact-button bg-white text-blue-600 rounded-full p-2 hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#" class="contact-button bg-white text-blue-600 rounded-full p-2 hover:bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          <p class="text-sm italic mt-6">Click again to flip back</p>
        `;

        // Append the back card to the card container
        this.appendChild(backCard);
      }

      // Toggle the flipped class
      this.classList.toggle('team-card-flipped');
    });
  });

  // Add escape key handler to flip back all cards
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.team-card-flipped').forEach((card) => {
        card.classList.remove('team-card-flipped');
      });
    }
  });
});
