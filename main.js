function initGuidesSearch() {
    const guidesSection = document.querySelector('#guides');
    const searchInput = guidesSection?.querySelector('.search-bar');
    if (!guidesSection || !searchInput) return;

    const guideCards = Array.from(
        guidesSection.querySelectorAll('.home-section-details-section')
    );

    const filterGuides = () => {
        const query = searchInput.value.toLowerCase().trim();

        guideCards.forEach((card) => {
            const searchableText = card.textContent.toLowerCase();
            card.hidden = !searchableText.includes(query);
        });
    };

    searchInput.addEventListener('input', filterGuides);
}

document.addEventListener('DOMContentLoaded', initGuidesSearch);