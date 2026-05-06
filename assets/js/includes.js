/* Tiny include loader so every page shares the same header/footer
   without duplicating markup. In WordPress this becomes get_header()/get_footer(). */
(() => {
  const root = location.pathname.includes('/pages/') ? '../' : './';

  const HEADER = `
<div class="bg-brand-900 text-brand-50 text-xs sm:text-sm">
  <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
    <p class="flex items-center gap-2">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
      <span class="hidden sm:inline">Now accepting NAS, Neuron, Almadallah & FMC insurance</span>
      <span class="sm:hidden">Insurance partners onboarded</span>
    </p>
    <a href="${root}index.html#contact" class="hidden md:inline-flex items-center gap-1 hover:text-gold">Book a free 15-min consult →</a>
  </div>
</div>
<header id="site-header" class="sticky top-0 z-50 bg-sand/80 backdrop-blur-md border-b border-brand-100/60">
  <nav class="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
    <a href="${root}index.html" class="flex items-center gap-2.5 group">
      <span class="relative inline-flex w-10 h-10 rounded-xl bg-brand-800 text-sand items-center justify-center font-display font-semibold text-lg shadow-soft">
        P<span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-sand"></span>
      </span>
      <div class="leading-tight">
        <div class="font-display text-lg text-brand-900">Precision Health</div>
        <div class="text-[10px] tracking-[0.2em] uppercase text-brand-600">Group</div>
      </div>
    </a>
    <ul class="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-900">
      <li><a href="${root}pages/services.html" class="hover:text-brand-600">Telehealth</a></li>
      <li><a href="${root}pages/therapies.html" class="hover:text-brand-600">Therapies</a></li>
      <li><a href="${root}pages/clinics.html" class="hover:text-brand-600">Clinics</a></li>
      <li><a href="${root}pages/shop.html" class="hover:text-brand-600">Shop</a></li>
      <li><a href="${root}pages/about.html" class="hover:text-brand-600">About</a></li>
      <li><a href="${root}pages/franchise.html" class="hover:text-brand-600">Franchise</a></li>
    </ul>
    <div class="flex items-center gap-2">
      <a href="${root}pages/shop.html" aria-label="Shop" class="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-full text-brand-800 hover:bg-brand-50">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2l1.5 4.5h9L18 2M3 7h18l-2 13H5L3 7z"/></svg>
      </a>
      <a href="${root}index.html#contact" class="hidden sm:inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-soft">
        Book Consult →
      </a>
      <button id="menu-toggle" aria-label="Open menu" class="lg:hidden w-10 h-10 rounded-full hover:bg-brand-50 flex items-center justify-center text-brand-900">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </nav>
  <div id="mobile-menu" class="lg:hidden hidden border-t border-brand-100 bg-sand">
    <div class="max-w-7xl mx-auto px-4 py-4 space-y-1 text-brand-900">
      <a href="${root}pages/services.html" class="block px-3 py-3 rounded-lg hover:bg-cream">Telehealth</a>
      <a href="${root}pages/therapies.html" class="block px-3 py-3 rounded-lg hover:bg-cream">Therapies</a>
      <a href="${root}pages/clinics.html" class="block px-3 py-3 rounded-lg hover:bg-cream">Clinics</a>
      <a href="${root}pages/shop.html" class="block px-3 py-3 rounded-lg hover:bg-cream">Shop</a>
      <a href="${root}pages/about.html" class="block px-3 py-3 rounded-lg hover:bg-cream">About</a>
      <a href="${root}pages/franchise.html" class="block px-3 py-3 rounded-lg hover:bg-cream">Franchise</a>
      <a href="${root}index.html#contact" class="block mt-2 text-center bg-brand-800 text-white font-semibold py-3 rounded-full">Book Consult</a>
    </div>
  </div>
</header>`;

  const FOOTER = `
<footer class="bg-ink text-sand/80 mt-20">
  <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
    <div class="lg:col-span-2">
      <div class="flex items-center gap-2.5">
        <span class="w-10 h-10 rounded-xl bg-brand-700 text-sand flex items-center justify-center font-display text-lg">P</span>
        <div>
          <div class="font-display text-lg text-sand">Precision Health</div>
          <div class="text-[10px] tracking-[0.2em] uppercase text-sand/60">Group</div>
        </div>
      </div>
      <p class="mt-5 max-w-sm text-sm leading-relaxed">An integrated group of healthcare and wellness entities — moving you from suboptimal to truly well.</p>
    </div>
    <div><h4 class="text-sand font-semibold mb-4 text-sm">Care</h4><ul class="space-y-2.5 text-sm">
      <li><a href="${root}pages/services.html" class="hover:text-sand">Telehealth</a></li>
      <li><a href="${root}pages/therapies.html" class="hover:text-sand">Therapies</a></li>
      <li><a href="${root}pages/clinics.html" class="hover:text-sand">Clinics</a></li>
      <li><a href="${root}pages/shop.html" class="hover:text-sand">Shop</a></li>
    </ul></div>
    <div><h4 class="text-sand font-semibold mb-4 text-sm">Company</h4><ul class="space-y-2.5 text-sm">
      <li><a href="${root}pages/about.html" class="hover:text-sand">About</a></li>
      <li><a href="${root}pages/franchise.html" class="hover:text-sand">Franchise</a></li>
      <li><a href="#" class="hover:text-sand">Certifications</a></li>
      <li><a href="#" class="hover:text-sand">Careers</a></li>
    </ul></div>
    <div>
      <h4 class="text-sand font-semibold mb-4 text-sm">Stay informed</h4>
      <p class="text-sm">Monthly briefings written by our clinicians.</p>
      <form class="mt-4 flex gap-2">
        <input type="email" required placeholder="Email address" class="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sand placeholder:text-sand/40 outline-none focus:border-gold text-sm" />
        <button class="bg-gold text-brand-900 font-semibold px-5 rounded-full hover:bg-gold/90 text-sm">Join</button>
      </form>
    </div>
  </div>
  <div class="border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
      <p>© <span id="year"></span> Precision Health Group. All rights reserved.</p>
      <ul class="flex gap-6"><li><a href="#" class="hover:text-sand">Privacy</a></li><li><a href="#" class="hover:text-sand">Terms</a></li></ul>
    </div>
  </div>
</footer>
<a href="${root}index.html#contact" class="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white font-semibold px-5 py-3 rounded-full shadow-glow">
  <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span> Talk to us →
</a>`;

  document.querySelectorAll('[data-include="header"]').forEach(el => el.outerHTML = HEADER);
  document.querySelectorAll('[data-include="footer"]').forEach(el => el.outerHTML = FOOTER);
})();
