/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://static.wixstatic.com/media/11062b_a6d154bfda6d4921baa3cdf6b615a9db~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1895,h_731,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6d154bfda6d4921baa3cdf6b615a9db~mv2_d_5184_3456_s_4_2.jpg')",
        'footer-texture': "url('https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      }
    },
    screens: {
      xs: '320px',
      sm: '375px',
      lsm: '425px',
      mmd: '550px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

