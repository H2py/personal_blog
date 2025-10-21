const toggleButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-menu');

if (toggleButton && navigation) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;
    toggleButton.setAttribute('aria-expanded', String(nextState));
    navigation.setAttribute('data-open', String(nextState));
  });
}
