const shortcutsData = {
  netflix: {
    title: "Netflix Shortcuts",
    color: "#e50914",
    shortcuts: [
      { key: 'Space', action: 'Play/Pause' },
      { key: 'F', action: 'Fullscreen' },
      { key: 'Esc', action: 'Exit fullscreen' },
      { key: '←', action: 'Rewind 10s' },
      { key: '→', action: 'Fast forward 10s' },
      { key: '↑', action: 'Volume up' },
      { key: '↓', action: 'Volume down' },
      { key: 'M', action: 'Mute' },
      { key: 'S', action: 'Skip intro' },
      { key: 'Shift+←', action: 'Previous episode' },
      { key: 'Shift+→', action: 'Next episode' }
    ]
  },
  youtube: {
    title: "YouTube Shortcuts",
    color: "#ff0000",
    shortcuts: [
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
      { key: 'Shift+N', action: 'Next video' },
      { key: 'Shift+P', action: 'Previous video' }
    ]
  },
  abema: {
    title: "Abema TV Shortcuts",
    color: "#00d4ff",
    shortcuts: [
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
    ]
  },
  amazon: {
    title: "Amazon Prime Video Shortcuts",
    color: "#00a8e1",
    shortcuts: [
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
      { key: 'Shift+←', action: 'Previous episode' },
      { key: 'Shift+→', action: 'Next episode' },
      { key: 'Home', action: 'Go to beginning' },
      { key: 'End', action: 'Go to end' }
    ]
  },
  default: {
    title: "Video Platform Shortcuts",
    color: "#888888",
    shortcuts: [
      { key: '?', action: 'Toggle shortcuts on Netflix, YouTube, Abema TV, or Amazon Prime Video' }
    ]
  }
};

function detectPlatform(url) {
  if (url.includes('netflix.com')) return 'netflix';
  if (url.includes('youtube.com')) return 'youtube';
  if (url.includes('abema.tv')) return 'abema';
  if (url.includes('amazon.co') && url.includes('gp/video')) return 'amazon';
  return 'default';
}

function renderShortcuts(platform) {
  const data = shortcutsData[platform];
  const header = document.querySelector('.header h2');
  const shortcutsList = document.querySelector('.shortcuts-list');
  
  header.textContent = data.title;
  header.style.color = data.color;
  
  shortcutsList.innerHTML = data.shortcuts.map(shortcut => `
    <div class="shortcut-item">
      <span class="shortcut-key">${shortcut.key}</span>
      <span class="shortcut-action">${shortcut.action}</span>
    </div>
  `).join('');
  
  const tip = document.querySelector('.tip');
  if (platform === 'default') {
    tip.textContent = 'Visit Netflix, YouTube, Abema TV, or Amazon Prime Video to see platform-specific shortcuts';
  } else {
    tip.innerHTML = '💡 Press "?" on the page to toggle overlay';
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  const platform = detectPlatform(currentTab.url);
  renderShortcuts(platform);
});
