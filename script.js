/* ==========================================================
   ROMANTIC MIDNIGHT TWILIGHT BIRTHDAY SURPRISE - SCRIPT.JS
   (Unified All-In-One SPA: 100% Reliable & Foolproof)
   ========================================================== */

// Page Switcher Function
window.switchPage = function(fromPage, toPage) {
  if (!fromPage || !toPage) return;
  fromPage.style.opacity = '0';
  fromPage.style.transform = 'scale(0.97) translateY(-8px)';
  
  setTimeout(() => {
    fromPage.classList.add('hidden-page');
    fromPage.style.display = 'none';

    toPage.classList.remove('hidden-page');
    toPage.style.display = 'flex';
    toPage.style.opacity = '0';
    toPage.style.transform = 'scale(0.97) translateY(12px)';

    void toPage.offsetWidth;

    toPage.style.opacity = '1';
    toPage.style.transform = 'scale(1) translateY(0)';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 250);
};

// Navigation Handlers
window.goToPage2 = function() {
  const p1 = document.getElementById('page-1');
  const p2 = document.getElementById('page-2');
  window.switchPage(p1, p2);
};

window.goToPage3 = function() {
  const p2 = document.getElementById('page-2');
  const p3 = document.getElementById('page-3');
  window.switchPage(p2, p3);
};

// Candle Blowing Function (Guaranteed to work on click)
window.blowCandles = function() {
  // 1. Immediately vanish flames
  const flames = document.querySelectorAll('.candle-flame');
  flames.forEach(f => {
    f.classList.add('flame-extinguished');
    f.style.display = 'none';
  });

  // 2. Show rising smoke curls
  const smokes = document.querySelectorAll('.candle-smoke');
  smokes.forEach(s => {
    s.classList.remove('hidden-svg');
    s.style.display = 'block';
  });

  // 3. Switch Bear to winking / smiling happy eyes
  document.querySelectorAll('.eye-normal').forEach(e => {
    e.style.display = 'none';
  });
  document.querySelectorAll('.eye-happy').forEach(e => {
    e.classList.remove('hidden-svg');
    e.style.display = 'block';
  });

  // 4. Update speech bubble
  const speechText = document.querySelector('#bear-speech .speech-text');
  if (speechText) {
    speechText.textContent = 'Happy 22nd Birthday Baby!!';
  }

  // 5. Update hint
  const hint = document.getElementById('blow-hint');
  if (hint) {
    hint.textContent = 'Make a wish and read your letter.';
  }

  // 6. Confetti shower
  if (typeof window.triggerConfetti === 'function') {
    window.triggerConfetti(90);
  }

  // 7. Hide "Blow Candles" and reveal "Read Letter" button
  const btnBlow = document.getElementById('btn-blow-candles');
  if (btnBlow) {
    btnBlow.style.display = 'none';
  }

  const btnGoto3 = document.getElementById('btn-goto-page3');
  if (btnGoto3) {
    btnGoto3.classList.remove('hidden');
    btnGoto3.style.display = 'inline-flex';
    btnGoto3.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// Replay Function
window.replaySurprise = function() {
  // Restore flames
  document.querySelectorAll('.candle-flame').forEach(f => {
    f.classList.remove('flame-extinguished');
    f.style.display = 'block';
  });

  // Hide smoke
  document.querySelectorAll('.candle-smoke').forEach(s => {
    s.classList.add('hidden-svg');
    s.style.display = 'none';
  });

  // Restore normal eyes
  document.querySelectorAll('.eye-normal').forEach(e => {
    e.style.display = 'block';
  });
  document.querySelectorAll('.eye-happy').forEach(e => {
    e.classList.add('hidden-svg');
    e.style.display = 'none';
  });

  // Restore buttons
  const btnBlow = document.getElementById('btn-blow-candles');
  if (btnBlow) {
    btnBlow.style.display = 'inline-flex';
  }

  const btnGoto3 = document.getElementById('btn-goto-page3');
  if (btnGoto3) {
    btnGoto3.classList.add('hidden');
    btnGoto3.style.display = 'none';
  }

  const hint = document.getElementById('blow-hint');
  if (hint) {
    hint.textContent = 'Make a wish and blow out the candles.';
  }

  const p2 = document.getElementById('page-2');
  const p3 = document.getElementById('page-3');
  window.switchPage(p3, p2);
};


document.addEventListener('DOMContentLoaded', () => {

  // ========================================================
  // 1. COUNTDOWN TIMER LOGIC (Page 1)
  // ========================================================
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const unlockContainer = document.getElementById('unlock-container');
  const targetDateText = document.getElementById('target-date-text');
  const btnQuickPreview = document.getElementById('btn-quick-preview');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const now = new Date();
    let targetYear = now.getFullYear();
    let birthdayTarget = new Date(targetYear, 10, 14, 0, 0, 0);

    const endOfBirthday = new Date(targetYear, 10, 14, 23, 59, 59);
    if (now > endOfBirthday) {
      birthdayTarget = new Date(targetYear + 1, 10, 14, 0, 0, 0);
    }

    if (targetDateText) {
      targetDateText.textContent = `November 14, ${birthdayTarget.getFullYear()}`;
    }

    let isTimerUnlocked = false;

    function triggerTimerReached() {
      if (isTimerUnlocked) return;
      isTimerUnlocked = true;
      if (unlockContainer) {
        unlockContainer.classList.remove('hidden');
      }
    }

    function updateCountdown() {
      const currentTime = new Date();
      const diff = birthdayTarget - currentTime;

      if (diff <= 0 || (currentTime.getMonth() === 10 && currentTime.getDate() === 14)) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        triggerTimerReached();
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    if (btnQuickPreview) {
      btnQuickPreview.addEventListener('click', () => {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        triggerTimerReached();
        if (unlockContainer) {
          unlockContainer.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }


  // ========================================================
  // 2. POLAROID LIGHTBOX (Page 3)
  // ========================================================
  const polaroids = document.querySelectorAll('.polaroid-card');
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (polaroids.length > 0 && modal && modalImg && modalCaption) {
    polaroids.forEach(card => {
      card.addEventListener('click', () => {
        const photoSrc = card.getAttribute('data-photo');
        const captionText = card.getAttribute('data-caption');
        modalImg.src = photoSrc;
        modalCaption.textContent = captionText;
        modal.classList.remove('hidden');
      });
    });

    function closeModal() {
      modal.classList.add('hidden');
      modalImg.src = '';
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }


  // ========================================================
  // 3. STARRY NIGHT CANVAS (Twinkling Stars & Subtle Stardust)
  // ========================================================
  const bgCanvas = document.getElementById('bg-canvas');
  if (bgCanvas) {
    const bgCtx = bgCanvas.getContext('2d');
    let bgWidth = bgCanvas.width = window.innerWidth;
    let bgHeight = bgCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      bgWidth = bgCanvas.width = window.innerWidth;
      bgHeight = bgCanvas.height = window.innerHeight;
      initStars();
    });

    const stars = [];
    function initStars() {
      stars.length = 0;
      const starCount = Math.floor((bgWidth * bgHeight) / 6000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * bgWidth,
          y: Math.random() * bgHeight,
          radius: Math.random() * 1.6 + 0.4,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.005,
          increasing: Math.random() > 0.5,
          color: Math.random() > 0.3 ? '#ffffff' : (Math.random() > 0.5 ? '#ffb3cc' : '#ffd6a5')
        });
      }
    }
    initStars();

    const stardust = [];
    class StardustMote {
      constructor() {
        this.x = Math.random() * bgWidth;
        this.y = bgHeight + Math.random() * 20;
        this.radius = Math.random() * 1.8 + 0.8;
        this.speedY = Math.random() * -0.7 - 0.2;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.color = Math.random() > 0.4 ? 'rgba(255, 117, 151, ' : 'rgba(255, 255, 255, ';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y < -10) {
          this.y = bgHeight + 10;
          this.x = Math.random() * bgWidth;
        }
      }

      draw() {
        bgCtx.save();
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        bgCtx.fillStyle = this.color + this.alpha + ')';
        bgCtx.shadowColor = '#ff4d88';
        bgCtx.shadowBlur = 6;
        bgCtx.fill();
        bgCtx.restore();
      }
    }

    for (let i = 0; i < 30; i++) {
      const m = new StardustMote();
      m.y = Math.random() * bgHeight;
      stardust.push(m);
    }

    function animateBg() {
      bgCtx.clearRect(0, 0, bgWidth, bgHeight);

      // Stars
      for (let s of stars) {
        if (s.increasing) {
          s.alpha += s.speed;
          if (s.alpha >= 0.95) s.increasing = false;
        } else {
          s.alpha -= s.speed;
          if (s.alpha <= 0.15) s.increasing = true;
        }
        bgCtx.save();
        bgCtx.beginPath();
        bgCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        bgCtx.fillStyle = s.color === '#ffffff' ? `rgba(255, 255, 255, ${s.alpha})` : s.color;
        bgCtx.globalAlpha = s.alpha;
        bgCtx.shadowColor = '#ff7597';
        bgCtx.shadowBlur = s.radius > 1.2 ? 5 : 2;
        bgCtx.fill();
        bgCtx.restore();
      }

      // Stardust
      for (let m of stardust) {
        m.update();
        m.draw();
      }

      requestAnimationFrame(animateBg);
    }
    animateBg();
  }


  // ========================================================
  // 4. CONFETTI SYSTEM
  // ========================================================
  const confettiCanvas = document.getElementById('confetti-canvas');
  if (confettiCanvas) {
    const confCtx = confettiCanvas.getContext('2d');
    let confWidth = confettiCanvas.width = window.innerWidth;
    let confHeight = confettiCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      confWidth = confettiCanvas.width = window.innerWidth;
      confHeight = confettiCanvas.height = window.innerHeight;
    });

    const confettiPieces = [];
    const confettiColors = ['#ff4d88', '#ff7597', '#ffd166', '#ffffff', '#e84393', '#b388ff'];

    class Confetti {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 5;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.speedX = (Math.random() - 0.5) * 11;
        this.speedY = Math.random() * -11 - 3;
        this.gravity = 0.32;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 8;
        this.opacity = 1;
      }

      update() {
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        if (this.y > confHeight * 0.6) {
          this.opacity -= 0.015;
        }
      }

      draw() {
        confCtx.save();
        confCtx.translate(this.x, this.y);
        confCtx.rotate((this.rotation * Math.PI) / 180);
        confCtx.globalAlpha = Math.max(0, this.opacity);
        confCtx.fillStyle = this.color;
        confCtx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
        confCtx.restore();
      }
    }

    window.triggerConfetti = function(count = 70) {
      const originX = window.innerWidth / 2;
      const originY = window.innerHeight * 0.55;
      for (let i = 0; i < count; i++) {
        confettiPieces.push(new Confetti(originX, originY));
      }
    };

    function animateConfetti() {
      confCtx.clearRect(0, 0, confWidth, confHeight);
      for (let i = confettiPieces.length - 1; i >= 0; i--) {
        const c = confettiPieces[i];
        c.update();
        c.draw();
        if (c.opacity <= 0 || c.y > confHeight + 20) {
          confettiPieces.splice(i, 1);
        }
      }
      requestAnimationFrame(animateConfetti);
    }
    animateConfetti();
  }

});
