/* Shared header/footer for Precision Health GROUP — parent brand site.
   Internal pages: Home, About, Academy, Corporate Health, Talk to us.
   Brand sites (Clinix, Wellness, Shop) live on their own domains and open
   in a new tab. */
(() => {
  const root = location.pathname.includes('/pages/') ? '../' : './';

  /* External brand sites — placeholders to be swapped for real domains
     when the integration team confirms them. Marked rel="external" so a
     WordPress filter can rewrite them later. */
  const EXT = {
    clinix:   'https://prcnclinix.com/',
    wellness: 'https://prcnwellness.com/',
    shop:     'https://prcnstore.com/'
  };

  const HEADER = `
<div class="bg-forest-900 text-ivory/90 text-[12px]">
  <div class="max-w-7xl mx-auto px-5 lg:px-8 py-2.5 flex items-center justify-between gap-4">
    <p class="flex items-center gap-2 font-mono uppercase tracking-[0.18em]">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-clay-400"></span>
      <span class="hidden sm:inline">Precision Health Group · Dubai · UAE</span>
      <span class="sm:hidden">PRCN · UAE</span>
    </p>
    <div class="flex items-center gap-4">
      <a href="${root}pages/academy.html" class="hidden md:inline hover:text-clay-200 transition">Academy enrolling</a>
      <a href="${root}pages/talk-to-us.html" class="inline-flex items-center gap-1 hover:text-clay-200 transition">Talk to us →</a>
    </div>
  </div>
</div>
<header id="site-header" class="sticky top-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-transparent transition-all">
  <nav class="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
    <a href="${root}index.html" class="flex items-center gap-3" aria-label="Precision Health Group">
      <span class="relative inline-flex w-9 h-9 items-center justify-center rounded-md bg-forest-700 text-ivory font-display text-lg leading-none">
        P<span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-clay-400"></span>
      </span>
      <span class="leading-tight">
        <span class="block font-display text-[19px] text-forest-800 tracking-tightest">Precision Health</span>
        <span class="block font-mono text-[9px] uppercase tracking-[0.25em] text-forest-700/70 mt-0.5">Group · est. 2018</span>
      </span>
    </a>

    <ul class="hidden lg:flex items-center gap-7 text-[14px] font-medium text-forest-800">
      <li><a href="${root}pages/about.html" class="hover:text-clay-400 transition">About</a></li>
      <li class="relative group">
        <button class="flex items-center gap-1 hover:text-clay-400 transition py-2">
          Brands
          <svg class="w-3 h-3 transition group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
          <div class="bg-ivory rounded-md shadow-paper border border-forest-200/60 p-2 grid grid-cols-2">
            <a href="${EXT.clinix}" target="_blank" rel="noopener external" class="p-4 rounded-md hover:bg-bone transition">
              <div class="flex items-start justify-between">
                <span class="font-mono text-[10px] uppercase tracking-widest text-clay-400">01 · Clinix</span>
                <svg class="w-3 h-3 text-forest-700/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
              <span class="block font-display text-lg text-forest-800 mt-1">Precision Health Clinix</span>
              <span class="block text-xs text-forest-700/70 mt-1">Integrative medicine clinics & therapies.</span>
            </a>
            <a href="${EXT.wellness}" target="_blank" rel="noopener external" class="p-4 rounded-md hover:bg-bone transition">
              <div class="flex items-start justify-between">
                <span class="font-mono text-[10px] uppercase tracking-widest text-clay-400">02 · Wellness</span>
                <svg class="w-3 h-3 text-forest-700/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
              <span class="block font-display text-lg text-forest-800 mt-1">Precision Wellness</span>
              <span class="block text-xs text-forest-700/70 mt-1">Three-zone wellness centres.</span>
            </a>
            <a href="${EXT.shop}" target="_blank" rel="noopener external" class="p-4 rounded-md hover:bg-bone transition">
              <div class="flex items-start justify-between">
                <span class="font-mono text-[10px] uppercase tracking-widest text-clay-400">03 · Shop</span>
                <svg class="w-3 h-3 text-forest-700/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
              <span class="block font-display text-lg text-forest-800 mt-1">Precision Shop</span>
              <span class="block text-xs text-forest-700/70 mt-1">Tests, supplements & wellness tech.</span>
            </a>
            <a href="${root}pages/academy.html" class="p-4 rounded-md hover:bg-bone transition">
              <span class="font-mono text-[10px] uppercase tracking-widest text-clay-400">04 · Academy</span>
              <span class="block font-display text-lg text-forest-800 mt-1">Precision Academy</span>
              <span class="block text-xs text-forest-700/70 mt-1">Online & residency programmes.</span>
            </a>
          </div>
        </div>
      </li>
      <li><a href="${root}pages/academy.html" class="hover:text-clay-400 transition">Academy</a></li>
      <li><a href="${root}pages/corporate-health-packages.html" class="hover:text-clay-400 transition">Corporate</a></li>
      <li><a href="${root}pages/talk-to-us.html" class="hover:text-clay-400 transition">Talk to us</a></li>
    </ul>

    <div class="flex items-center gap-2">
      <a href="${root}pages/talk-to-us.html" class="hidden sm:inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-ivory text-[13px] font-semibold px-5 py-2.5 rounded-full transition">
        Book a consult
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <button id="menu-toggle" aria-label="Open menu" class="lg:hidden w-10 h-10 rounded-full hover:bg-bone flex items-center justify-center text-forest-800">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </nav>

  <div id="mobile-menu" class="lg:hidden hidden border-t border-forest-200/60 bg-ivory">
    <div class="max-w-7xl mx-auto px-5 py-4 space-y-1 text-forest-800">
      <p class="px-3 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-clay-400">Group</p>
      <a href="${root}pages/about.html" class="block px-3 py-2.5 rounded-md hover:bg-bone">About</a>
      <a href="${root}pages/academy.html" class="block px-3 py-2.5 rounded-md hover:bg-bone">Academy</a>
      <a href="${root}pages/corporate-health-packages.html" class="block px-3 py-2.5 rounded-md hover:bg-bone">Corporate Health Packages</a>
      <a href="${root}pages/talk-to-us.html" class="block px-3 py-2.5 rounded-md hover:bg-bone">Talk to us</a>
      <p class="px-3 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-clay-400">Brands</p>
      <a href="${EXT.clinix}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-md hover:bg-bone">Precision Clinix <span class="text-forest-700/50 text-xs">↗</span></a>
      <a href="${EXT.wellness}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-md hover:bg-bone">Precision Wellness <span class="text-forest-700/50 text-xs">↗</span></a>
      <a href="${EXT.shop}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-md hover:bg-bone">Precision Shop <span class="text-forest-700/50 text-xs">↗</span></a>
      <a href="${root}pages/talk-to-us.html" class="block mt-3 text-center bg-forest-700 text-ivory font-semibold py-3 rounded-full">Book a consult</a>
    </div>
  </div>
</header>`;

  const FOOTER = `
<footer class="bg-forest-800 text-ivory/80 mt-0">
  <div class="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-10">
    <div class="grid lg:grid-cols-12 gap-10 pb-14 border-b border-ivory/10">
      <div class="lg:col-span-5">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-md bg-ivory text-forest-800 flex items-center justify-center font-display text-lg">P</span>
          <div>
            <div class="font-display text-xl text-ivory">Precision Health Group</div>
            <div class="font-mono text-[9px] uppercase tracking-[0.25em] text-ivory/50 mt-0.5">A house of four brands</div>
          </div>
        </div>
        <p class="mt-6 max-w-md font-display text-2xl text-ivory/90 leading-tight">
          Merging precise science and personalised care to deliver true health and wellness.
        </p>
        <form class="mt-8 flex gap-2 max-w-md">
          <input type="email" required placeholder="Email for our quarterly briefing" class="flex-1 px-4 py-3 rounded-md bg-ivory/10 border border-ivory/15 text-ivory placeholder:text-ivory/40 outline-none focus:border-clay-400 transition text-sm" />
          <button class="bg-clay-400 hover:bg-clay-500 text-ivory font-semibold px-5 rounded-md transition text-sm">Subscribe</button>
        </form>
      </div>
      <div class="lg:col-span-2">
        <h4 class="font-mono text-[10px] uppercase tracking-[0.2em] text-clay-200 mb-4">Group</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${root}pages/about.html" class="hover:text-ivory">About</a></li>
          <li><a href="${root}pages/academy.html" class="hover:text-ivory">Academy</a></li>
          <li><a href="${root}pages/corporate-health-packages.html" class="hover:text-ivory">Corporate Health</a></li>
          <li><a href="${root}pages/talk-to-us.html" class="hover:text-ivory">Talk to us</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h4 class="font-mono text-[10px] uppercase tracking-[0.2em] text-clay-200 mb-4">Brand sites</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${EXT.clinix}" target="_blank" rel="noopener external" class="hover:text-ivory inline-flex items-center gap-1.5">Precision Clinix <span class="text-ivory/40 text-xs">↗</span></a></li>
          <li><a href="${EXT.wellness}" target="_blank" rel="noopener external" class="hover:text-ivory inline-flex items-center gap-1.5">Precision Wellness <span class="text-ivory/40 text-xs">↗</span></a></li>
          <li><a href="${EXT.shop}" target="_blank" rel="noopener external" class="hover:text-ivory inline-flex items-center gap-1.5">Precision Shop <span class="text-ivory/40 text-xs">↗</span></a></li>
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h4 class="font-mono text-[10px] uppercase tracking-[0.2em] text-clay-200 mb-4">Reach us</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="mailto:hello@prcnhealth.com" class="hover:text-ivory">hello@prcnhealth.com</a></li>
          <li><a href="tel:+97140000000" class="hover:text-ivory">+971 4 000 0000</a></li>
          <li class="text-ivory/60 text-xs pt-2">Dubai · UAE</li>
        </ul>
      </div>
    </div>
    <div class="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/55">
      <p class="font-mono uppercase tracking-[0.15em]">© <span id="year"></span> · Precision Health Group · All rights reserved</p>
      <ul class="flex gap-6">
        <li><a href="#" class="hover:text-ivory">Privacy</a></li>
        <li><a href="#" class="hover:text-ivory">Terms</a></li>
        <li><a href="#" class="hover:text-ivory">Cookies</a></li>
      </ul>
    </div>
  </div>
</footer>`;

  document.querySelectorAll('[data-include="header"]').forEach(el => el.outerHTML = HEADER);
  document.querySelectorAll('[data-include="footer"]').forEach(el => el.outerHTML = FOOTER);
})();
