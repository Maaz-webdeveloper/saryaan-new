// ═══════════════════════════════
//        MOBILE MENU TOGGLE
// ═══════════════════════════════
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Text Content
    setTimeout(() => {
        document.querySelectorAll('.reveal-hero-left').forEach(el => {
            el.classList.remove('opacity-0', '-translate-x-10');
            el.classList.add('opacity-100', 'translate-x-0');
        });
    }, 100);

    // Reveal Cards in sequence
    document.querySelectorAll('.reveal-hero-card').forEach((el, i) => {
        setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-10', 'scale-50');
            el.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        }, 300 + (i * 200)); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Mobile Text
    setTimeout(() => {
        document.querySelectorAll('.reveal-mobile-text').forEach(el => {
            el.classList.remove('opacity-0');
            el.classList.add('opacity-100');
        });
    }, 200);

    // Reveal Mobile Cards with delay
    document.querySelectorAll('.reveal-mobile-card').forEach((el, i) => {
        setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
        }, 600 + (i * 150)); 
    });
});
// ═══════════════════════════════
//        SOLUTIONS DATA
// ═══════════════════════════════
const solutions = [
  {
    color: '#007C84',
    title: 'Invoice Infrastructure Engine',
    sub: 'Convert static invoices into compliant, finance-ready digital assets',
    items: [
      {
        name: 'Invoice Ingestion (Manual or ERP Sync)',
        desc: 'Seamlessly ingest invoices from any source, manual upload or direct ERP sync, into one unified digital workflow.'
      },
      {
        name: 'Duplicate and PO Validation',
        desc: 'Automatically detect duplicate invoices and validate against purchase orders to eliminate errors and fraud risk.'
      },
      {
        name: 'Tax and Regulatory Readiness',
        desc: 'Ensure full E-invoicing Ready compliance across all invoice types.'
      },
      {
        name: 'QR and Lifecycle Tracking',
        desc: 'Track every invoice from creation to settlement with QR-enabled lifecycle visibility.'
      },
      {
        name: 'Full Audit Trail',
        desc: 'Maintain a complete, tamper-proof audit trail for every invoice action across the ecosystem.'
      },
    ]
  },
  {
    color: '#0B1E3B',
    title: 'Payment Orchestration Engine',
    sub: 'Digitize B2B payment workflows with real-time reconciliation',
    items: [
      {
        name: 'Bulk Payment Batching',
        desc: 'Process hundreds of supplier payments in a single batch, reducing manual effort and processing time.'
      },
      {
        name: 'Maker-Checker Approval Logic',
        desc: 'Enforce dual-control approval workflows to ensure every payment is authorized and compliant.'
      },
      {
        name: 'Bank API or File-Based Integration',
        desc: 'Connect directly to banks via API or file-based formats for seamless payment execution.'
      },
      {
        name: 'Automated Settlement Reconciliation',
        desc: 'Automatically match payments to invoices and reconcile accounts in real time.'
      },
    ]
  },
  {
    color: '#007C84',
    title: 'Supply Chain Finance Engine',
    sub: 'Unlock early liquidity for suppliers via bank-partner capital models',
    items: [
      {
        name: 'Eligible Invoice Detection',
        desc: 'Automatically identify invoices eligible for early payment based on buyer approval status and risk profile.'
      },
      {
        name: 'Early Payment Simulation',
        desc: 'Let suppliers simulate early payment scenarios and choose the best financing option.'
      },
      {
        name: 'Risk-Based Pricing',
        desc: 'Apply dynamic, risk-based pricing models to optimize financing costs for both buyers and suppliers.'
      },
      {
        name: 'Settlement Adjustment at Maturity',
        desc: 'Automatically adjust settlement amounts at invoice maturity based on financing terms.'
      },
    ]
  }
];

const segColors = ['#007C84', '#0B1E3B', '#007C84'];
const segOff    = ['#c8e6e6', '#b0bec5', '#c8d8e0'];

let currentSol  = 0;
let currentItem = 0;
// ═══════════════════════════════
//       SWITCH SOLUTION
// ═══════════════════════════════
function switchSolution(idx) {
  currentSol  = idx;
  currentItem = 0;
  renderSolution();
}
// ═══════════════════════════════
//         SWITCH ITEM
// ═══════════════════════════════
function switchItem(idx) {
  currentItem = idx;
  renderItems();
  renderDesc();
}

// ═══════════════════════════════
//       RENDER SOLUTION
// ═══════════════════════════════
function renderSolution() {
  const sol = solutions[currentSol];

  // Update donut segments
  for (let i = 0; i < 3; i++) {
    document.getElementById('seg' + i).setAttribute(
      'fill',
      i === currentSol ? segColors[i] : segOff[i]
    );
  }

  // Update badge & dot
  document.getElementById('sol-badge').style.background   = sol.color + '22';
  document.getElementById('sol-badge').style.borderColor  = sol.color;
  document.getElementById('sol-dot').style.background     = sol.color;

  // Update title & subtitle
  document.getElementById('sol-title').textContent = sol.title;
  document.getElementById('sol-sub').textContent   = sol.sub;

  // Update center icon color
  document.getElementById('center-icon').style.background = sol.color;

  // Update desc panel border
  document.getElementById('desc-panel').style.borderColor = sol.color + '33';

  // Update tabs
  for (let i = 0; i < 3; i++) {
    const tab = document.getElementById('tab' + i);
    if (i === currentSol) {
      tab.style.background = segColors[i];
      tab.style.color      = 'white';
      tab.style.borderColor = segColors[i];
    } else {
      tab.style.background = 'white';
      tab.style.color      = '#1E293B';
      tab.style.borderColor = '#0B1E3B';
    }
  }

  renderItems();
  renderDesc();
}

// ═══════════════════════════════
//         RENDER ITEMS
// ═══════════════════════════════
function renderItems() {
  const sol  = solutions[currentSol];
  const list = document.getElementById('items-list');
  list.innerHTML = '';

  sol.items.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left px-4 py-3 mb-2 rounded-lg flex items-center justify-between text-sm font-semibold';
    btn.style.transition = 'all 0.2s';

    if (idx === currentItem) {
      btn.style.background = sol.color;
      btn.style.color      = 'white';
      btn.style.border     = '1px solid ' + sol.color;
    } else {
      btn.style.background = 'white';
      btn.style.color      = '#1E293B';
      btn.style.border     = '1px solid #e2e8f0';
    }

    btn.innerHTML =
      item.name +
      `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 flex-shrink-0"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>`;

    btn.onclick = () => switchItem(idx);
    list.appendChild(btn);
  });
}

// ═══════════════════════════════
//         RENDER DESC
// ═══════════════════════════════
function renderDesc() {
  const sol  = solutions[currentSol];
  const item = sol.items[currentItem];

  document.getElementById('desc-title').style.color  = sol.color;
  document.getElementById('desc-title').textContent  = item.name;
  document.getElementById('desc-text').textContent   = item.desc;
}

// ═══════════════════════════════
//            INIT
// ═══════════════════════════════
document.addEventListener('DOMContentLoaded', function () {
  renderSolution();
});

// ═══════════════════════════════
//       WAITLIST FORM
// ═══════════════════════════════
// Demo persistence key (browser localStorage)
const waitlistStorageKey = 'saryaan_waitlist_submissions';

function setSolutionButtonState(button, isActive) {
  button.setAttribute('data-active', isActive ? 'true' : 'false');
  button.style.background = isActive ? '#007C84' : '#F8FAFC';
  button.style.color = isActive ? 'white' : '#64748b';
  button.style.borderColor = isActive ? '#007C84' : '#e2e8f0';
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('success-msg');
  const errorMsg = document.getElementById('error-msg');
  const solutionBtns = Array.from(document.querySelectorAll('.solution-btn'));

  // Intersection Observer for generic reveal animations (used on solutions page too)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal-item, .reveal-left').forEach(el => {
    observer.observe(el);
  });

  if (!form || !submitBtn || !successMsg) {
    return;
  }

  // Helper for quick inspection in browser console.
  window.getWaitlistSubmissions = function () {
    return JSON.parse(localStorage.getItem(waitlistStorageKey) || '[]');
  };

  solutionBtns.forEach((btn) => {
    setSolutionButtonState(btn, false);
    btn.addEventListener('click', function () {
      const isActive = this.getAttribute('data-active') === 'true';
      setSolutionButtonState(this, !isActive);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('field-name').value.trim();
    const companyName = document.getElementById('field-company').value.trim();
    const workEmail = document.getElementById('field-email').value.trim();
    const phoneNumber = document.getElementById('field-phone').value.trim();
    const industry = document.getElementById('field-industry').value.trim();
    const country = document.getElementById('field-country').value.trim();
    const selectedSolutions = solutionBtns
      .filter((btn) => btn.getAttribute('data-active') === 'true')
      .map((btn) => btn.textContent.trim());

    successMsg.classList.add('hidden');
    if (errorMsg) {
      errorMsg.classList.add('hidden');
      errorMsg.textContent = '';
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail);
    if (!fullName || !companyName || !workEmail || !industry || !country) {
      if (errorMsg) {
        errorMsg.textContent = 'Please fill all required fields marked with *.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }
    if (!isValidEmail) {
      if (errorMsg) {
        errorMsg.textContent = 'Please enter a valid work email address.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }

    const payload = {
      fullName,
      companyName,
      workEmail,
      phoneNumber,
      industry,
      country,
      selectedSolutions,
      submittedAt: new Date().toISOString(),
    };

    const previousLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    try {
      const existing = JSON.parse(localStorage.getItem(waitlistStorageKey) || '[]');
      const allSubmissions = Array.isArray(existing) ? existing : [];
      allSubmissions.push(payload);
      localStorage.setItem(waitlistStorageKey, JSON.stringify(allSubmissions));

      form.reset();
      form.classList.add('hidden');
      solutionBtns.forEach((btn) => setSolutionButtonState(btn, false));
      successMsg.classList.remove('hidden');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      if (errorMsg) {
        errorMsg.textContent = 'Unable to save right now. Please try again.';
        errorMsg.classList.remove('hidden');
      }
      console.error('Waitlist submit failed:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = previousLabel;
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1, // Jab card ka 10% hissa screen par aaye tab show ho
        rootMargin: "0px 0px -50px 0px" // Thoda screen ke andar aane par start ho
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Har agle card ke liye 100ms ka delay (Stagger Effect)
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, index % 3 * 150); // Mobile par sequence maintain karne ke liye %3
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-card').forEach(card => {
        observer.observe(card);
    });
});
    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.1 // 10% section nazar aate hi start ho jaye
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        // Dono side ke elements ko observe karna
        document.querySelectorAll('.reveal-left-careful, .reveal-form-careful').forEach(el => {
            observer.observe(el);
        });
    });
        document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Agar CTA hai to 'cta-visible' lagao, warna 'is-visible'
                    if (entry.target.classList.contains('reveal-cta')) {
                        entry.target.classList.add('cta-visible');
                    } else {
                        entry.target.classList.add('is-visible');
                    }
                }
            });
        }, { threshold: 0.15 });

        // Sabhi animated elements ko select karna
        const elementsToAnimate = document.querySelectorAll('.reveal-left-careful, .reveal-form-careful, .reveal-cta');
        elementsToAnimate.forEach(el => observer.observe(el));
    });

    document.addEventListener('DOMContentLoaded', () => {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const footerItems = entry.target.querySelectorAll('.reveal-footer-item');
                    footerItems.forEach((item, index) => {
                        // Har item ko thoda late trigger karna (Stagger effect)
                        setTimeout(() => {
                            item.classList.add('footer-visible');
                        }, index * 150); 
                    });
                }
            });
        }, { threshold: 0.1 });

        // Footer container ko observe karein
        const footerSection = document.querySelector('footer');
        if (footerSection) footerObserver.observe(footerSection);
    });
