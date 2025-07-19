module.exports = {
 content: [
    './docs/**/*.{html,js}'
  ],
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',     // sửa từ 1024px về 992px như Bootstrap
        xl: '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        a: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      fontSize: {
        '8px':'8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
      },
      spacing: {
        '2px': '2px!important',
        '4px': '4px!important',
        '8px': '8px',
        '10px': '10px!important',
        '12': '12px',
        '16': '16px!important',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '44': '44px',
        '46': '46px',
        '48': '48px',
        '52': '52px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
        '120': '120px',
        '150': '150px',
        '170': '170px',
        '200': '200px',
        '250': '250px',
        '227': '227px',
        '300': '300px',
        '350': '350px',
        'half': '50%',
        '40p': '40%',
        '60p': '60%',
        '320': '320px',
        '420': '420px',
        'full': '100%'
       },
       colors: {
        'white':'#fff!important',
        'primary': '#0282a5!important',
        'primary2': '#002F4D!important',
        'second': '#EC0505',
        'gray':'#e6e6e6',
        'blue':'#005EAA',
        'orange':'#ef8528',
        'gray2': '#f3f4f6',
        'white-opacity':'rgba(255,255,255,.2)',
        'red':'#b50303',
       },
       borderRadius: {
        '4':'4px',
        '8':'8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '50p': '50%',
      }
    }
  },
};