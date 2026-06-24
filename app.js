document.addEventListener('DOMContentLoaded', () => {
  // ── State Management ──
  let completedDays = [];
  let dayNotes = {};
  let activePhaseId = 'react';
  
  // Active filters
  let searchQuery = '';
  let activeStatusFilter = 'all'; // 'all', 'completed', 'incomplete', 'notes'
  let activeTagFilter = null; // null or string

  // Load from LocalStorage
  function loadState() {
    try {
      const storedCompleted = localStorage.getItem('fs_roadmap_completed');
      const storedNotes = localStorage.getItem('fs_roadmap_notes');
      
      if (storedCompleted) completedDays = JSON.parse(storedCompleted);
      if (storedNotes) dayNotes = JSON.parse(storedNotes);
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
    }
  }

  // Save to LocalStorage
  function saveState() {
    try {
      localStorage.setItem('fs_roadmap_completed', JSON.stringify(completedDays));
      localStorage.setItem('fs_roadmap_notes', JSON.stringify(dayNotes));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }

  // Find day object in ROADMAP_PHASES
  function getDayObject(dayNum) {
    for (const phase of window.ROADMAP_PHASES) {
      for (const week of phase.weeks) {
        const found = week.days.find(d => d.d === dayNum);
        if (found) return { day: found, phase };
      }
    }
    return null;
  }

  // ── Render Phase Navigation ──
  function renderPhaseNav() {
    const phaseNav = document.getElementById('phaseNav');
    phaseNav.innerHTML = '';

    window.ROADMAP_PHASES.forEach(phase => {
      const btn = document.createElement('button');
      btn.className = `phase-btn ${phase.id === activePhaseId ? 'active' : ''}`;
      btn.id = `phase-btn-${phase.id}`;
      
      // Calculate progress for this phase
      const totalDays = phase.weeks.reduce((acc, w) => acc + w.days.length, 0);
      const completedInPhase = phase.weeks.reduce((acc, w) => {
        return acc + w.days.filter(d => completedDays.includes(d.d)).length;
      }, 0);

      btn.innerHTML = `
        <span>${phase.icon}</span>
        <span>${phase.label}</span>
        <span class="phase-btn-progress" id="phase-progress-${phase.id}">${completedInPhase}/${totalDays}</span>
      `;

      // Theme variables on button style or data attributes
      btn.style.setProperty('--phase-color', phase.color);
      btn.style.setProperty('--phase-glow', phase.color + '33');

      btn.addEventListener('click', () => {
        switchPhase(phase.id);
      });

      phaseNav.appendChild(btn);
    });

    // ── Carousel arrow logic ──
    const phaseNavEl = document.getElementById('phaseNav');
    const prevBtn    = document.getElementById('phaseNavPrev');
    const nextBtn    = document.getElementById('phaseNavNext');

    function updateArrows() {
      if (!phaseNavEl) return;
      const atStart = phaseNavEl.scrollLeft <= 4;
      const atEnd   = phaseNavEl.scrollLeft + phaseNavEl.clientWidth >= phaseNavEl.scrollWidth - 4;
      if (prevBtn) prevBtn.disabled = atStart;
      if (nextBtn) nextBtn.disabled = atEnd;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        phaseNavEl.scrollBy({ left: -220, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        phaseNavEl.scrollBy({ left: 220, behavior: 'smooth' });
      });
    }
    if (phaseNavEl) {
      phaseNavEl.addEventListener('scroll', updateArrows);
      // Initial state
      updateArrows();
    }
  }

  // Switch Phase Tab
  function switchPhase(phaseId) {
    activePhaseId = phaseId;
    
    // Update nav buttons
    document.querySelectorAll('.phase-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`phase-btn-${phaseId}`);
    if (activeBtn) {
      activeBtn.classList.add('active');
      // Auto-scroll active button into view inside the nav track
      const nav = document.getElementById('phaseNav');
      if (nav) {
        const btnLeft  = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const navWidth = nav.clientWidth;
        nav.scrollTo({ left: btnLeft - (navWidth / 2) + (btnWidth / 2), behavior: 'smooth' });
      }
    }

    // Set document root variables to matching phase colors for dynamic UI highlights
    const phaseObj = window.ROADMAP_PHASES.find(p => p.id === phaseId);
    if (phaseObj) {
      document.documentElement.style.setProperty('--phase-color', phaseObj.color);
      document.documentElement.style.setProperty('--phase-glow', phaseObj.color + '22');
    }

    // Toggle panels visibility
    document.querySelectorAll('.phase-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    const activePanel = document.getElementById(`panel-${phaseId}`);
    if (activePanel) activePanel.classList.add('active');
  }

  // ── Render Curriculum Panels ──
  function renderCurriculum() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    window.ROADMAP_PHASES.forEach(phase => {
      const panel = document.createElement('section');
      panel.className = `phase-panel ${phase.id === activePhaseId ? 'active' : ''}`;
      panel.id = `panel-${phase.id}`;

      // Panel Header Info
      const header = document.createElement('div');
      header.className = 'phase-header';
      header.style.setProperty('--phase-glow', phase.color + '25');
      header.style.setProperty('--phase-icon-bg', phase.iconBg);
      header.innerHTML = `
        <div class="phase-icon">${phase.icon}</div>
        <div class="phase-info">
          <h2>${phase.label} <span>${phase.duration}</span></h2>
          <p>${phase.desc}</p>
          <div class="phase-badges">
            ${phase.badges.map(b => `<span class="phase-badge">${b}</span>`).join('')}
          </div>
        </div>
      `;
      panel.appendChild(header);

      // Render Weeks
      phase.weeks.forEach((week, weekIdx) => {
        const weekSection = document.createElement('div');
        weekSection.className = 'week-section';
        weekSection.id = `week-${phase.id}-${weekIdx}`;
        weekSection.innerHTML = `<div class="week-label">${week.title}</div>`;

        const dayList = document.createElement('div');
        dayList.className = 'day-list';

        week.days.forEach(day => {
          const isCompleted = completedDays.includes(day.d);
          const hasNotes = !!dayNotes[day.d];
          
          const dayCard = document.createElement('div');
          dayCard.className = `day-card ${isCompleted ? 'completed-card' : ''}`;
          dayCard.id = `day-card-${day.d}`;
          dayCard.setAttribute('data-day', day.d);
          dayCard.setAttribute('data-tag', day.tag);
          
          dayCard.style.setProperty('--phase-color', phase.color);
          dayCard.style.setProperty('--phase-glow', phase.color + '22');

          // Tag classes
          const tagClass = getTagClass(day.tag);

          dayCard.innerHTML = `
            <div class="day-header" id="day-header-${day.d}">
              <label class="checkbox-container">
                <input type="checkbox" class="day-checkbox" id="checkbox-${day.d}" data-day="${day.d}" ${isCompleted ? 'checked' : ''} />
                <span class="checkmark"></span>
              </label>
              <div class="day-num">Day ${day.d}</div>
              <div class="day-title">${day.t}</div>
              <div class="day-tag ${tagClass}">${day.tag}</div>
              <div class="day-caret">▶</div>
            </div>
            <div class="day-body" id="day-body-${day.d}">
              <div class="day-body-inner">
                <div class="topics-block">
                  <div class="block-label">Topics Covered</div>
                  ${day.topics.map(t => `
                    <div class="topic-item">
                      <span class="topic-dot"></span>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>
                
                <div class="project-block">
                  <div class="project-tag">Daily Hands-on Project</div>
                  <div class="project-name">🛠️ ${day.project.n}</div>
                  <div class="project-desc">${day.project.desc}</div>
                  
                  ${day.iq && day.iq.length ? `
                  <div class="iq-block">
                    <div class="iq-label">🧠 Interview Questions</div>
                    <ol class="iq-list">
                      ${day.iq.map(q => `<li class="iq-item">${q}</li>`).join('')}
                    </ol>
                  </div>
                  ` : ''}
                  
                  <div class="notes-container">
                    <div class="notes-header">
                      <span class="notes-label">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                        Daily Learning Notes
                      </span>
                      <span class="notes-status" id="notes-status-${day.d}">${hasNotes ? 'Saved' : 'Empty'}</span>
                    </div>
                    <textarea class="notes-textarea" id="notes-${day.d}" data-day="${day.d}" placeholder="Jot down notes, save project links, or write key code snippets...">${dayNotes[day.d] || ''}</textarea>
                  </div>
                </div>
              </div>
            </div>
          `;

          // Checkbox handler
          const checkbox = dayCard.querySelector('.day-checkbox');
          checkbox.addEventListener('change', (e) => {
            toggleDayCompletion(day.d, e.target.checked);
          });

          // Open/Collapse Day Card handler (only trigger when clicking header areas that aren't the checkbox label)
          const headerEl = dayCard.querySelector('.day-header');
          headerEl.addEventListener('click', (e) => {
            if (e.target.closest('.checkbox-container')) return; // ignore checkbox click
            toggleDayExpand(day.d);
          });

          // Auto-save Notes Handler
          const notesTextarea = dayCard.querySelector('.notes-textarea');
          let saveTimeout;
          notesTextarea.addEventListener('input', (e) => {
            const dayNum = day.d;
            const text = e.target.value;
            const statusEl = document.getElementById(`notes-status-${dayNum}`);
            
            if (statusEl) statusEl.textContent = 'Typing...';
            
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
              if (text.trim() === '') {
                delete dayNotes[dayNum];
                if (statusEl) statusEl.textContent = 'Empty';
              } else {
                dayNotes[dayNum] = text;
                if (statusEl) statusEl.textContent = 'Saved';
              }
              saveState();
              updateCalendarState(dayNum);
              
              // update status filter if notes tab is active
              if (activeStatusFilter === 'notes') {
                applyFilters();
              }
            }, 600); // Debounce save
          });

          dayList.appendChild(dayCard);
        });

        weekSection.appendChild(dayList);
        panel.appendChild(weekSection);
      });

      mainContent.appendChild(panel);
    });
  }

  // Get specific tag CSS class
  function getTagClass(tag) {
    switch (tag.toLowerCase()) {
      case 'crud': return 'tag-crud';
      case 'capstone': return 'tag-capstone';
      case 'auth': return 'tag-auth';
      case 'setup': return 'tag-setup';
      default: return '';
    }
  }

  // Toggle Card Open/Closed
  function toggleDayExpand(dayNum) {
    const card = document.getElementById(`day-card-${dayNum}`);
    if (!card) return;
    
    const isOpen = card.classList.contains('open');
    
    // Close other open days in the same list to keep it clean (optional - we'll just toggle this one)
    card.classList.toggle('open');
  }

  // Mark Day Completed / Incomplete
  function toggleDayCompletion(dayNum, isChecked) {
    const card = document.getElementById(`day-card-${dayNum}`);
    
    if (isChecked) {
      if (!completedDays.includes(dayNum)) completedDays.push(dayNum);
      if (card) card.classList.add('completed-card');
    } else {
      completedDays = completedDays.filter(d => d !== dayNum);
      if (card) card.classList.remove('completed-card');
    }
    
    saveState();
    updateProgressUI();
    updateCalendarState(dayNum);
  }

  // ── Render Contribution Calendar Grid ──
  function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    // Total 182 Days mapping
    for (let dayNum = 1; dayNum <= 182; dayNum++) {
      const dayData = getDayObject(dayNum);
      const isCompleted = completedDays.includes(dayNum);
      const block = document.createElement('div');
      block.className = `calendar-day ${isCompleted ? 'completed' : ''}`;
      block.id = `cal-day-${dayNum}`;
      block.setAttribute('data-day', dayNum);
      
      if (dayData) {
        block.setAttribute('data-phase', dayData.phase.id);
        block.setAttribute('data-tooltip', `Day ${dayNum}: ${dayData.day.t} (${isCompleted ? 'Done' : 'ToDo'})`);
      } else {
        block.setAttribute('data-tooltip', `Day ${dayNum}`);
      }

      // Scroll & Expand on Click
      block.addEventListener('click', () => {
        if (dayData) {
          // Switch to correct phase
          switchPhase(dayData.phase.id);
          
          // Wait briefly for active panel render, then scroll to day card
          setTimeout(() => {
            const card = document.getElementById(`day-card-${dayNum}`);
            if (card) {
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              // Open card if not already open
              if (!card.classList.contains('open')) {
                card.classList.add('open');
              }
              
              // Temporary glow highlight
              card.style.transform = 'scale(1.02)';
              setTimeout(() => card.style.transform = '', 300);
            }
          }, 150);
        }
      });

      grid.appendChild(block);
    }
  }

  // Update specific calendar day state
  function updateCalendarState(dayNum) {
    const block = document.getElementById(`cal-day-${dayNum}`);
    const isCompleted = completedDays.includes(dayNum);
    const dayData = getDayObject(dayNum);

    if (block) {
      if (isCompleted) {
        block.classList.add('completed');
      } else {
        block.classList.remove('completed');
      }
      
      if (dayData) {
        block.setAttribute('data-tooltip', `Day ${dayNum}: ${dayData.day.t} (${isCompleted ? 'Done' : 'ToDo'})`);
      }
    }
  }

  // ── Update All Progress Indicators UI ──
  function updateProgressUI() {
    const totalDays = 182;
    const completedCount = completedDays.length;
    
    // Overall Percentage
    const overallPercent = Math.round((completedCount / totalDays) * 100) || 0;
    
    // Update labels
    const progressPercentText = document.getElementById('progressPercentText');
    const overallProgressBar = document.getElementById('overallProgressBar');
    const progressSummary = document.getElementById('progressSummary');
    
    if (progressPercentText) progressPercentText.textContent = `${overallPercent}%`;
    if (overallProgressBar) overallProgressBar.style.width = `${overallPercent}%`;
    if (progressSummary) progressSummary.textContent = `${completedCount}/${totalDays} Completed`;

    // Update Phase Nav Counts
    window.ROADMAP_PHASES.forEach(phase => {
      const phaseTotal = phase.weeks.reduce((acc, w) => acc + w.days.length, 0);
      const phaseCompleted = phase.weeks.reduce((acc, w) => {
        return acc + w.days.filter(d => completedDays.includes(d.d)).length;
      }, 0);
      
      const countEl = document.getElementById(`phase-progress-${phase.id}`);
      if (countEl) countEl.textContent = `${phaseCompleted}/${phaseTotal}`;
    });
  }

  // ── Search & Filter Logic ──
  function applyFilters() {
    const cards = document.querySelectorAll('.day-card');
    const query = searchQuery.toLowerCase().trim();

    // Track visible days per week section so we can hide empty week labels
    const visibleDaysPerWeek = {};

    cards.forEach(card => {
      const dayNum = parseInt(card.getAttribute('data-day'));
      const tag = card.getAttribute('data-tag');
      const dayData = getDayObject(dayNum);

      let matchesSearch = true;
      let matchesStatus = true;
      let matchesTag = true;

      // 1. Search Query Match
      if (query && dayData) {
        const titleMatch = dayData.day.t.toLowerCase().includes(query);
        const projectMatch = dayData.day.project.n.toLowerCase().includes(query) || dayData.day.project.desc.toLowerCase().includes(query);
        const topicMatch = dayData.day.topics.some(topic => topic.toLowerCase().includes(query));
        const dayNumMatch = `day ${dayNum}`.includes(query) || dayNum.toString() === query;

        matchesSearch = titleMatch || projectMatch || topicMatch || dayNumMatch;
      }

      // 2. Status Match
      const isCompleted = completedDays.includes(dayNum);
      const hasNotes = !!dayNotes[dayNum];
      if (activeStatusFilter === 'completed') {
        matchesStatus = isCompleted;
      } else if (activeStatusFilter === 'incomplete') {
        matchesStatus = !isCompleted;
      } else if (activeStatusFilter === 'notes') {
        matchesStatus = hasNotes;
      }

      // 3. Tag Match
      if (activeTagFilter) {
        matchesTag = (tag === activeTagFilter);
      }

      // Apply visibility
      const finalMatch = matchesSearch && matchesStatus && matchesTag;
      if (finalMatch) {
        card.style.display = 'block';
        
        // Find which week section this belongs to
        const weekSec = card.closest('.week-section');
        if (weekSec) {
          visibleDaysPerWeek[weekSec.id] = (visibleDaysPerWeek[weekSec.id] || 0) + 1;
        }
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle visibility of week headers if they have zero matching days
    document.querySelectorAll('.week-section').forEach(weekSec => {
      const visibleCount = visibleDaysPerWeek[weekSec.id] || 0;
      if (visibleCount === 0 && (query || activeStatusFilter !== 'all' || activeTagFilter)) {
        weekSec.style.display = 'none';
      } else {
        weekSec.style.display = 'block';
      }
    });
  }

  // Setup Search Input Event
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Status Filters Click Handlers
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeStatusFilter = e.target.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Tag Filters Click Handlers
  document.querySelectorAll('.filter-tag').forEach(tagEl => {
    tagEl.addEventListener('click', (e) => {
      const tag = e.target.getAttribute('data-tag');
      
      if (e.target.classList.contains('active')) {
        // Deactivate filter
        e.target.classList.remove('active');
        activeTagFilter = null;
      } else {
        // Activate filter
        document.querySelectorAll('.filter-tag').forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        activeTagFilter = tag;
      }
      applyFilters();
    });
  });

  // Focus search with '/' shortcut key
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // ── Import / Export / Backup Controls ──
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importFileInput = document.getElementById('importFileInput');
  const resetBtn = document.getElementById('resetBtn');

  // Export JSON Backup
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const backupData = {
        version: 1,
        exportDate: new Date().toISOString(),
        completedDays: completedDays,
        dayNotes: dayNotes
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `full_stack_roadmap_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Trigger File Upload for Import
  if (importBtn && importFileInput) {
    importBtn.addEventListener('click', () => {
      importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(event) {
        try {
          const imported = JSON.parse(event.target.result);
          
          if (imported && Array.isArray(imported.completedDays)) {
            // Confirm overwrite
            const confirmOverwrite = confirm('This will overwrite your current progress. Are you sure you want to restore this backup?');
            if (!confirmOverwrite) return;

            completedDays = imported.completedDays;
            dayNotes = imported.dayNotes || {};
            
            saveState();
            
            // Reload page to re-render all elements correctly with new state
            window.location.reload();
          } else {
            alert('Invalid backup file format.');
          }
        } catch (err) {
          alert('Failed to parse JSON backup file.');
          console.error(err);
        }
      };
      reader.readAsText(file);
    });
  }

  // Reset Progress
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const confirmReset = confirm('WARNING: This will delete all your checked progress and written notes. This action is irreversible. Are you sure?');
      if (confirmReset) {
        localStorage.removeItem('fs_roadmap_completed');
        localStorage.removeItem('fs_roadmap_notes');
        window.location.reload();
      }
    });
  }

  // ── Initialization Execution ──
  loadState();
  renderPhaseNav();
  renderCurriculum();
  renderCalendar();
  updateProgressUI();

  // Initialize CSS variables for the default tab (React)
  const defaultPhaseObj = window.ROADMAP_PHASES.find(p => p.id === activePhaseId);
  if (defaultPhaseObj) {
    document.documentElement.style.setProperty('--phase-color', defaultPhaseObj.color);
    document.documentElement.style.setProperty('--phase-glow', defaultPhaseObj.color + '22');
  }
});
