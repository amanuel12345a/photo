/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://static.wixstatic.com/media/11062b_a6d154bfda6d4921baa3cdf6b615a9db~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1895,h_731,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6d154bfda6d4921baa3cdf6b615a9db~mv2_d_5184_3456_s_4_2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

