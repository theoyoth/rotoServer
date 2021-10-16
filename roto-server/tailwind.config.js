module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage :{
        'hero' : "url('~/assets/img/login-form.png')",
        'master' : "url('~/assets/img/master-menu.png')",
        'bg-gen' : "url('~/assets/img/bg.png')",
        'gr-white': "linear-gradient(to bottom right, rgba(255,255,255,1),rgba(255,255,255,0.4))",
        'gr-blue' : "linear-gradient(to bottom right, rgba(89,174,246,1) 0%, rgba(168,209,255,1) 100%)",
        'gr-red' : "linear-gradient(to bottom right, rgba(219,136,118,1) 0%, rgba(246,223,216,1) 100%)",
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
