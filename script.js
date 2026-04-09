// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isHidden = mobileMenu.classList.contains('hidden');
    menuIcon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
    lucide.createIcons();
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Features Data
const usaFeatures = [
    "Name availability check",
    "State registration (LLC formation)",
    "Articles of Organization",
    "Certificate of Formation",
    "Registered Agent (1 year)",
    "US Business Address (virtual)",
    "EIN letter (IRS)",
    "ITIN (if required)",
    "Operating Agreement",
    "Help in US business bank account setup",
    "Good Standing Certificate",
    "W9 Form",
    "US Tax consultation",
    "Post formation support",
    "Stripe account setup assistance",
    "USA virtual phone number",
    "PayPal Business account setup help",
    "Wise / Mercury account setup assistance"
];

const ukFeatures = [
    "Name availability check",
    "Company registration (Companies House)",
    "Certificate of Incorporation",
    "Company number (CRN)",
    "Registered office address (UK)",
    "Director & shareholder setup",
    "Memorandum & Articles of Association",
    "UTR number (tax registration)",
    "Help in UK business bank account",
    "Good standing certificate",
    "Confirmation Statement (CS01) guidance",
    "Corporation Tax registration",
    "Post formation support",
    "Help in creating Stripe UK account",
    "UK virtual phone number",
    "PayPal Business setup help",
    "Wise business account setup help"
];

const reviews = [
    {
        name: "Rajesh Sharma",
        work: "E-commerce",
        country: "Nepal",
        flag: "🇳🇵",
        content: "Bijaybizsolutions made the USA LLC process so simple. I got my EIN and Stripe account within weeks."
    },
    {
        name: "Anjali Thapa",
        work: "Developer",
        country: "Nepal",
        flag: "🇳🇵",
        content: "The UK registration was incredibly fast. They helped me with the UTR number and Wise account."
    },
    {
        name: "Binod Chaudhary",
        work: "Agency",
        country: "Nepal",
        flag: "🇳🇵",
        content: "Excellent service! They handled the Registered Agent and US Address perfectly. Global payments ready."
    },
    {
        name: "Amit Patel",
        work: "SaaS Founder",
        country: "India",
        flag: "🇮🇳",
        content: "Professional team. They guided me through the Wyoming LLC formation and tax consultation."
    },
    {
        name: "Priya Singh",
        work: "Amazon Seller",
        country: "India",
        flag: "🇮🇳",
        content: "Bijaybizsolutions helped me expand my Amazon business to the UK. VAT guidance was top-notch."
    },
    {
        name: "Usman Khan",
        work: "Software CEO",
        country: "Pakistan",
        flag: "🇵🇰",
        content: "Finally a reliable service for US company registration. The EIN process was smooth."
    }
];

// Render Features
function renderFeatures(containerId, features, showAll = false) {
    const container = document.getElementById(containerId);
    const displayed = showAll ? features : features.slice(0, 8);
    
    container.innerHTML = displayed.map(feature => `
        <li class="flex items-start gap-3 text-sm text-gray-400">
            <i data-lucide="check-circle-2" class="h-4 w-4 text-primary shrink-0 mt-0.5"></i>
            ${feature}
        </li>
    `).join('');
    lucide.createIcons();
}

// USA Toggle
let showAllUsa = false;
const toggleUsaBtn = document.getElementById('toggle-usa');
toggleUsaBtn.addEventListener('click', () => {
    showAllUsa = !showAllUsa;
    renderFeatures('usa-features', usaFeatures, showAllUsa);
    toggleUsaBtn.innerHTML = showAllUsa 
        ? `Show less <i data-lucide="chevron-up" class="h-3 w-3"></i>`
        : `+ ${usaFeatures.length - 8} more features <i data-lucide="chevron-down" class="h-3 w-3"></i>`;
    lucide.createIcons();
});

// UK Toggle
let showAllUk = false;
const toggleUkBtn = document.getElementById('toggle-uk');
toggleUkBtn.addEventListener('click', () => {
    showAllUk = !showAllUk;
    renderFeatures('uk-features', ukFeatures, showAllUk);
    toggleUkBtn.innerHTML = showAllUk 
        ? `Show less <i data-lucide="chevron-up" class="h-3 w-3"></i>`
        : `+ ${ukFeatures.length - 8} more features <i data-lucide="chevron-down" class="h-3 w-3"></i>`;
    lucide.createIcons();
});

// Render Reviews
const reviewsGrid = document.getElementById('reviews-grid');
reviewsGrid.innerHTML = reviews.map((review, i) => `
    <div class="p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
        <div class="flex justify-between items-start mb-6">
            <div class="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Log_ID: 00${i+1}</div>
            <i data-lucide="quote" class="h-4 w-4 text-primary opacity-20"></i>
        </div>
        
        <p class="text-lg mb-8 font-medium leading-snug">
            "${review.content}"
        </p>
        
        <div class="flex items-center gap-4">
            <div class="h-10 w-10 bg-secondary border border-white/10 flex items-center justify-center font-bold text-xs">
                ${review.name[0]}
            </div>
            <div>
                <div class="text-sm font-bold uppercase tracking-tight">${review.name}</div>
                <div class="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                    <span>${review.flag} ${review.country}</span>
                    <span class="h-1 w-1 bg-white/20 rounded-full"></span>
                    <span>${review.work}</span>
                </div>
            </div>
        </div>
    </div>
`).join('');

// Initial Render
renderFeatures('usa-features', usaFeatures);
renderFeatures('uk-features', ukFeatures);
lucide.createIcons();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // If it's just "#", scroll to top
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Handle other anchor links
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
