/* Shared header/footer for Precision Health Group.
   Quieter version — fewer accents, plain logo lockup, simpler mega menu. */
(() => {
  const root = location.pathname.includes('/pages/') ? '../' : './';

  const EXT = {
    clinix:   'https://prcnclinix.com/',
    wellness: 'https://prcnwellness.com/',
    shop:     'https://prcnstore.com/'
  };

  const HEADER = `
<header id="site-header" class="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-transparent transition-all">
  <nav class="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
    <a href="${root}index.html" class="flex items-center gap-3" aria-label="Precision Health Group">
      <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-forest-700 text-ivory font-display text-base leading-none">P</span>
      <span class="font-display text-[19px] text-forest-800 leading-none">Precision Health</span>
    </a>

    <ul class="hidden lg:flex items-center gap-8 text-[14px] text-forest-800">
      <li><a href="${root}pages/about.html" class="hover:text-forest-600 transition">About</a></li>
      <li class="relative group">
        <button class="flex items-center gap-1 hover:text-forest-600 transition py-2">
          Brands
          <svg class="w-3 h-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="absolute right-0 top-full pt-3 w-[420px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
          <div class="bg-ivory rounded-md border border-forest-200/60 p-2">
            <a href="${EXT.clinix}" target="_blank" rel="noopener external" class="flex items-baseline justify-between p-3 rounded-sm hover:bg-bone transition">
              <span><span class="block font-display text-base text-forest-800">Precision Clinix</span><span class="block text-xs text-forest-700/70 mt-0.5">Integrative medicine clinics</span></span>
              <svg class="w-3 h-3 text-forest-700/50 shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
            <a href="${EXT.wellness}" target="_blank" rel="noopener external" class="flex items-baseline justify-between p-3 rounded-sm hover:bg-bone transition">
              <span><span class="block font-display text-base text-forest-800">Precision Wellness</span><span class="block text-xs text-forest-700/70 mt-0.5">Three-zone wellness centres</span></span>
              <svg class="w-3 h-3 text-forest-700/50 shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
            <a href="${EXT.shop}" target="_blank" rel="noopener external" class="flex items-baseline justify-between p-3 rounded-sm hover:bg-bone transition">
              <span><span class="block font-display text-base text-forest-800">Precision Shop</span><span class="block text-xs text-forest-700/70 mt-0.5">Tests, supplements, devices</span></span>
              <svg class="w-3 h-3 text-forest-700/50 shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
            <a href="${root}pages/academy.html" class="flex items-baseline justify-between p-3 rounded-sm hover:bg-bone transition">
              <span><span class="block font-display text-base text-forest-800">Precision Academy</span><span class="block text-xs text-forest-700/70 mt-0.5">Training & residency</span></span>
            </a>
          </div>
        </div>
      </li>
      <li><a href="${root}pages/academy.html" class="hover:text-forest-600 transition">Academy</a></li>
      <li><a href="${root}pages/corporate-health-packages.html" class="hover:text-forest-600 transition">Corporate</a></li>
    </ul>

    <div class="flex items-center gap-2">
      <a href="${root}pages/talk-to-us.html" class="hidden sm:inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-ivory text-[13px] font-medium px-5 py-2.5 rounded-full transition">
        Talk to us
      </a>
      <button id="menu-toggle" aria-label="Open menu" class="lg:hidden w-10 h-10 rounded-full hover:bg-bone flex items-center justify-center text-forest-800">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </nav>

  <div id="mobile-menu" class="lg:hidden hidden border-t border-forest-200/60 bg-ivory">
    <div class="max-w-7xl mx-auto px-6 py-5 space-y-1 text-forest-800">
      <a href="${root}pages/about.html" class="block px-3 py-2.5 rounded-sm hover:bg-bone">About</a>
      <a href="${root}pages/academy.html" class="block px-3 py-2.5 rounded-sm hover:bg-bone">Academy</a>
      <a href="${root}pages/corporate-health-packages.html" class="block px-3 py-2.5 rounded-sm hover:bg-bone">Corporate</a>
      <a href="${root}pages/talk-to-us.html" class="block px-3 py-2.5 rounded-sm hover:bg-bone">Talk to us</a>
      <p class="px-3 pt-4 pb-1 label text-forest-700/60">Brands</p>
      <a href="${EXT.clinix}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-sm hover:bg-bone">Precision Clinix <span class="text-forest-700/40 text-xs">↗</span></a>
      <a href="${EXT.wellness}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-sm hover:bg-bone">Precision Wellness <span class="text-forest-700/40 text-xs">↗</span></a>
      <a href="${EXT.shop}" target="_blank" rel="noopener external" class="flex justify-between px-3 py-2.5 rounded-sm hover:bg-bone">Precision Shop <span class="text-forest-700/40 text-xs">↗</span></a>
      <a href="${root}pages/talk-to-us.html" class="block mt-3 text-center bg-forest-700 text-ivory font-medium py-3 rounded-full">Talk to us</a>
    </div>
  </div>
</header>`;

  const FOOTER = `
<footer class="bg-forest-800 text-ivory/80 mt-0">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
    <div class="grid lg:grid-cols-12 gap-10 pb-12 border-b border-ivory/10">
      <div class="lg:col-span-5">
        <div class="flex items-center gap-3">
          <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-ivory text-forest-800 font-display text-base">P</span>
          <span class="font-display text-xl text-ivory">Precision Health</span>
        </div>
        <p class="mt-6 max-w-md text-base text-ivory/75 leading-relaxed">
          A group of four healthcare and wellness brands working under one banner.
        </p>
        <form class="mt-8 flex gap-2 max-w-md">
          <input type="email" required placeholder="Email for our quarterly note" class="flex-1 px-4 py-3 rounded-sm bg-ivory/5 border border-ivory/15 text-ivory placeholder:text-ivory/40 outline-none focus:border-ivory/50 transition text-sm" />
          <button class="bg-ivory text-forest-800 font-medium px-5 rounded-sm hover:bg-clay-100 transition text-sm">Subscribe</button>
        </form>
      </div>
      <div class="lg:col-span-2">
        <h4 class="label text-ivory/55 mb-4">Group</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${root}pages/about.html" class="hover:text-ivory">About</a></li>
          <li><a href="${root}pages/academy.html" class="hover:text-ivory">Academy</a></li>
          <li><a href="${root}pages/corporate-health-packages.html" class="hover:text-ivory">Corporate</a></li>
          <li><a href="${root}pages/talk-to-us.html" class="hover:text-ivory">Talk to us</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h4 class="label text-ivory/55 mb-4">Brands</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="${EXT.clinix}" target="_blank" rel="noopener external" class="hover:text-ivory">Precision Clinix ↗</a></li>
          <li><a href="${EXT.wellness}" target="_blank" rel="noopener external" class="hover:text-ivory">Precision Wellness ↗</a></li>
          <li><a href="${EXT.shop}" target="_blank" rel="noopener external" class="hover:text-ivory">Precision Shop ↗</a></li>
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h4 class="label text-ivory/55 mb-4">Reach us</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="mailto:hello@prcnhealth.com" class="hover:text-ivory">hello@prcnhealth.com</a></li>
          <li><a href="tel:+97140000000" class="hover:text-ivory">+971 4 000 0000</a></li>
          <li class="text-ivory/55 text-xs pt-2">Dubai · UAE</li>
        </ul>
      </div>
    </div>
    <div class="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ivory/50">
      <p>© <span id="year"></span> Precision Health Group. All rights reserved.</p>
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
