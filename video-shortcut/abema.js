let shortcutsOverlay = null;

function createShortcutsOverlay() {
  if (shortcutsOverlay) return;

  const overlay = document.createElement('div');
  overlay.id = 'abema-shortcuts-overlay';
  overlay.className = 'abema-shortcuts-hidden';
  
  const shortcuts = [
    { key: 'Space', action: 'Play/Pause' },
    { key: 'F', action: 'Fullscreen' },
    { key: 'Esc', action: 'Exit fullscreen' },
    { key: '←', action: 'Rewind 10s' },
    { key: '→', action: 'Fast forward 10s' },
    { key: '↑', action: 'Volume up' },
    { key: '↓', action: 'Volume down' },
    { key: 'M', action: 'Mute/Unmute' },
    { key: 'T', action: 'Toggle subtitles' },
    { key: 'C', action: 'Toggle comments' },
    { key: 'Enter', action: 'Next episode' }
  ];

  overlay.innerHTML = `
    <div class="shortcuts-content">
      <h3>Abema TV Keyboard Shortcuts</h3>
      <div class="shortcuts-list">
        ${shortcuts.map(shortcut => `
          <div class="shortcut-item">
            <span class="shortcut-key">${shortcut.key}</span>
            <span class="shortcut-action">${shortcut.action}</span>
          </div>
        `).join('')}
      </div>
      <div class="shortcuts-footer">
        <span>Press '?' to toggle this overlay</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  shortcutsOverlay = overlay;
}

function toggleShortcuts() {
  if (!shortcutsOverlay) {
    createShortcutsOverlay();
  }
  
  shortcutsOverlay.classList.toggle('abema-shortcuts-hidden');
}

document.addEventListener('keydown', function(event) {
  if (event.key === '?' && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    toggleShortcuts();
  }
});

createShortcutsOverlay();