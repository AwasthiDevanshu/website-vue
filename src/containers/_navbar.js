export default [
  {
    _name: 'CNavbarNav',
    props:{color:"black"},
    _children: [
      {
        _name: 'CNavItem',
        _children: ['About Us'],
        name: 'About',
        to: '/about-us',
        
      },
      {
        _name: 'CNavItem',
        _children: ['Contact'],
        name: 'About',
        to: '/contact-us',
      },
      {
        _name: 'CNavItem',
        _children: ['Contact'],
        name: 'About',
        to: '/contact-us',
      }
    ]
  }
]