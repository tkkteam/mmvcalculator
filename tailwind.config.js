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

      'index': "url('../public/images/banner-background.png')",
      'bgimg': "url('../public/images/bgipad.png')",
      
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
