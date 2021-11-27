module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('~/assets/img/login-form.png')",
        master: "url('~/assets/img/master-menu.png')",
        // loginWall: "url('~/assets/img/server.jpg')",
        'bg-gen': "url('~/assets/img/bg.png')",
        'gr-white':
          'linear-gradient(to bottom right, rgba(255,255,255,1),rgba(255,255,255,0.4))',
        'gr-blue':
          'linear-gradient(to bottom right, rgba(89,174,246,1) 0%, rgba(168,209,255,1) 100%)',
        'gr-red':
          'linear-gradient(to bottom right, rgba(219,136,118,1) 0%, rgba(246,223,216,1) 100%)',
        'gr-black-opac':
          "linear-gradient(30deg, rgba(4,9,20,0.6) 40%, rgba(2,4,41,0.6) 40%),url('~/assets/img/server.jpg')",
      },
      width: {
        widthLogin: '35%',
        widthGraphic: '62%',
        widthLoginLokasiPeran: '45%',
        widthContent: '81%',
        widthSidebar: 'calc(100% - 81%)',
        widthContentField: '95%',
        widthFormInput: 'calc(100% - 20%)',
      },
      height: {
        heightChart: '500px',
      },
      backgroundColor: {
        'sidebar-color': '#272a34',
      },
    },
  },
  variants: {
    extend: {
      color: ['hover'],
      transform: ['group-hover', 'hover'],
      width: ['focus', 'active', 'hover'],
    },
  },
  plugins: [],
}
