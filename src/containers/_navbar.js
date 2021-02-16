import config from "../constants/config";

export default [
  {
    _name: 'CNavbarNav',
    props:{color:"black"},
    _children: [

      {
        _name: 'CNavItem',
        _children: ['Courses'],
        name: 'About',
        to: '/courses',
      },
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
        _name: 'CButton',
        _children: ['Student Login'],
        _style:"background-color:white", 
        name: 'About',
        to: '/student-login',
      },
      {
        _name: 'CLink',
        _children: ['Download App'],
        _class:'btn btn-warning btn-md',
        name: 'Download App',
        href: config.androidappurl,
      },
    ]
  }
]