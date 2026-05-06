/* Shared Tailwind theme — keeps every page in sync.
   Inline equivalent lives in index.html for the homepage. */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Fraunces', 'Georgia', 'serif']
        },
        colors: {
          brand: {
            50:'#F1F8F6',100:'#DCEDE8',200:'#B6D9D0',300:'#84BDB0',400:'#4F9C8B',
            500:'#2A7E6E',600:'#1B655A',700:'#155049',800:'#0F4C46',900:'#0A322E'
          },
          sand:'#FAF7F2',cream:'#F4EFE6',gold:'#C9A86A',ink:'#0E1B1A'
        },
        boxShadow: {
          soft:'0 8px 30px rgba(15,76,70,.08)',
          glow:'0 20px 60px -20px rgba(15,76,70,.45)'
        },
        animation: {
          float:'float 6s ease-in-out infinite',
          'fade-up':'fadeUp .8s ease forwards',
          'pulse-ring':'pulseRing 2.4s cubic-bezier(.4,0,.6,1) infinite',
          marquee:'marquee 40s linear infinite'
        },
        keyframes: {
          float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'}},
          fadeUp:{'0%':{opacity:'0',transform:'translateY(24px)'},'100%':{opacity:'1',transform:'translateY(0)'}},
          pulseRing:{'0%':{transform:'scale(.8)',opacity:'.7'},'80%,100%':{transform:'scale(2)',opacity:'0'}},
          marquee:{'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}}
        }
      }
    }
  };
}
