const panels = Array.from(document.querySelectorAll('.section-panel'));
const toggles = Array.from(document.querySelectorAll('.section-toggle'));

function openPanel(targetPanel) {
  panels.forEach((panel) => {
    const isTarget = panel === targetPanel;
    panel.classList.toggle('is-open', isTarget);

    const button = panel.querySelector('.section-toggle');
    if (button) {
      button.setAttribute('aria-expanded', String(isTarget));
    }
  });
}

toggles.forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.closest('.section-panel');
    if (!panel) return;

    if (panel.classList.contains('is-open')) {
      panel.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      return;
    }

    openPanel(panel);
  });
});
