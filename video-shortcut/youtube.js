let shortcutsOverlay = null;

function createShortcutsOverlay() {
  if (shortcutsOverlay) return;

  const overlay = document.createElement('div');
  overlay.id = 'youtube-shortcuts-overlay';
  overlay.className = 'youtube-shortcuts-hidden';
  
  const shortcuts = [
    { key: 'Space / K', action: 'Play/Pause' },
    { key: 'F', action: 'Fullscreen' },
    { key: 'Esc', action: 'Exit fullscreen' },
    { key: '←', action: 'Rewind 5s' },
    { key: '→', action: 'Fast forward 5s' },
    { key: '↑', action: 'Volume up' },
    { key: '↓', action: 'Volume down' },
    { key: 'M', action: 'Mute/Unmute' },
    { key: 'J', action: 'Rewind 10s' },
    { key: 'L', action: 'Fast forward 10s' },
    { key: 'C', action: 'Toggle captions' },
    { key: 'T', action: 'Toggle theater mode' },
    { key: 'I', action: 'Toggle miniplayer' },
    { key: '0-9', action: 'Jump to % of video' },
    { key: 'Shift + N', action: 'Next video' },
    { key: 'Shift + P', action: 'Previous video' }
  ];

  overlay.innerHTML = `
    <div class="shortcuts-content">
      <h3>YouTube Keyboard Shortcuts</h3>
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
  
  shortcutsOverlay.classList.toggle('youtube-shortcuts-hidden');
}

document.addEventListener('keydown', function(event) {
  if (event.key === '?' && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    toggleShortcuts();
  }
});

createShortcutsOverlay();