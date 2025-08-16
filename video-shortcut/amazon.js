let shortcutsOverlay = null;

function createShortcutsOverlay() {
  if (shortcutsOverlay) return;

  const overlay = document.createElement('div');
  overlay.id = 'amazon-shortcuts-overlay';
  overlay.className = 'amazon-shortcuts-hidden';
  
  const shortcuts = [
    { key: 'Space', action: 'Play/Pause' },
    { key: 'F', action: 'Fullscreen' },
    { key: 'Esc', action: 'Exit fullscreen' },
    { key: '←', action: 'Rewind 10s' },
    { key: '→', action: 'Fast forward 10s' },
    { key: '↑', action: 'Volume up' },
    { key: '↓', action: 'Volume down' },
    { key: 'M', action: 'Mute/Unmute' },
    { key: 'C', action: 'Toggle captions' },
    { key: 'T', action: 'Toggle audio description' },
    { key: 'Shift + ←', action: 'Previous episode' },
    { key: 'Shift + →', action: 'Next episode' },
    { key: 'Home', action: 'Go to beginning' },
    { key: 'End', action: 'Go to end' }
  ];

  overlay.innerHTML = `
    <div class="shortcuts-content">
      <h3>Amazon Prime Video Keyboard Shortcuts</h3>
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
  
  shortcutsOverlay.classList.toggle('amazon-shortcuts-hidden');
}

document.addEventListener('keydown', function(event) {
  if (event.key === '?' && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    toggleShortcuts();
  }
});

createShortcutsOverlay();
