module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
  
    extend: {},
    
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        
    },
    backgroundImage: {

      'index': "url('../public/images/bar.png')",
      'barbg': "url('../public/images/bgbar1.png')",
      'Footer': "url('../public/images/Footer.png')",
      
      
    },
   
   
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "dark",
      "night",
    ],
  },
};
