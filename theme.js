// theme.js — safe dark mode + notification (single-load guard)
(function(){
  if (window.__themeLoaded) return;
  window.__themeLoaded = true;

  // create toggle button
  const btn = document.createElement('button');
  btn.id = 'theme-toggle-btn';
  btn.type = 'button';
  btn.title = 'Toggle theme';
  btn.textContent = '🌙';
  btn.style.cssText = 'background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer;padding:6px';

  // add to header's .user-info when DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.querySelector('.user-info');
    if (userInfo && !document.getElementById('theme-toggle-btn')) {
      userInfo.appendChild(btn);
    }
    // create notify container
    if (!document.querySelector('.notify-container')) {
      const container = document.createElement('div');
      container.className = 'notify-container';
      document.body.appendChild(container);
    }
    // apply saved theme
    const current = localStorage.getItem('theme');
    if (current === 'dark') {
      document.body.classList.add('dark');
      btn.textContent = '☀️';
    } else {
      document.body.classList.remove('dark');
      btn.textContent = '🌙';
    }
  });

  function setTheme(dark){
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme','dark');
      btn.textContent = '☀️';
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme','light');
      btn.textContent = '🌙';
    }
  }

  btn.addEventListener('click', ()=>{
    const isDark = document.body.classList.contains('dark');
    setTheme(!isDark);
    showNotify(!isDark ? 'Dark mode aktif 🌙' : 'Light mode aktif 🌞', 'info');
  });

  // notification system
  window.showNotify = function(message, type='info'){
    const container = document.querySelector('.notify-container');
    if (!container) return;
    const note = document.createElement('div');
    note.className = 'notify ' + (type||'info');
    note.textContent = message;
    container.appendChild(note);
    setTimeout(()=>{ note.style.opacity='0'; setTimeout(()=>note.remove(),400); }, 2200);
  };

  // override native alert
  window._nativeAlert = window.alert;
  window.alert = function(msg){ showNotify(String(msg), 'info'); };
})();
