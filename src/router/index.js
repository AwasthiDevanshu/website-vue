import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const HomePage = () => import('@/views/HomePage')
const AboutUs = () => import('@/views/AboutUs')
const ContactUs = () => import('@/views/ContactUs')
const Policy = () => import('@/views/Policy')

const Courses = () =>import('@/views/Courses')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),

})

function configRoutes () {
  return [
    {
      path: '/',
      name: 'Home',
      redirect: "/home",
      component: TheContainer,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomePage
        },{
          path:'/about-us',
          component: AboutUs,
          name: 'about-us',
        },
        {
          path:'/contact-us',
          component: ContactUs,
          name: 'contact-us',
        },
        {
          path:'/privacy-policy',
          component:Policy,
          name: 'Privacy Policy',
          meta: {
            policyType: 1
          }
        },
        {
          path:'/refund-policy',
          component:Policy,
          name: 'Refund Policy',
          meta: {
            policyType: 2
          }
        },
        {
          path:'/terms-and-conditions',
          component:Policy,
          name: 'Terms and conditions',
          meta: {
            policyType: 3
          }
        },
        {
          path:'/courses',
          component:Courses,
          name: 'Terms and conditions',
          meta: {
            policyType: 3
          }
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
       
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
   
  ]
}

