const urls = [
  {
    title: 'Navigation',
    items: [
      {
        url: '',
        icon: 'dashboard',
        title: 'Dashboards',
        items: [
          {
            url: '/dashboards/analytics',
            icon: '',
            title: 'Analytics',
            items: []
          },
          {
            url: '/dashboards/geographic',
            icon: '',
            title: 'Geographic',
            items: []
          },
          {
            url: '/dashboards/e-commerce',
            icon: '',
            title: 'E-commerce',
            items: []
          },
          {
            url: '/pages/create-account',
            icon: '',
            title: 'Create account',
            items: []
          },
          {
            url: '/pages/login',
            icon: '',
            title: 'Login',
            items: []
          }
        ]
      },
    ]
  },
  {
    title: 'Components',
    items: [
      {
        url: '',
        icon: 'assignment',
        title: 'Forms',
        items: [
          {
            url: '/forms/default-forms',
            icon: '',
            title: 'Default forms',
            items: []
          },
          {
            url: '/forms/input-groups',
            icon: '',
            title: 'Input groups',
            items: []
          },
          //          {
          //            url: '/forms/steps',
          //            icon: '',
          //            title: 'Form steps',
          //            items: []
          //          },
          {
            url: '/forms/validation',
            icon: '',
            title: 'Form validation',
            items: []
          },
          {
            url: '/forms/sliders',
            icon: '',
            title: 'Sliders',
            items: []
          },
          {
            url: '/forms/react-datetime',
            icon: '',
            title: 'Date picker',
            items: []
          },
          {
            url: '/forms/react-select',
            icon: '',
            title: 'React select',
            items: []
          }
        ]
      },
      {
        url: '',
        icon: 'format_list_bulleted',
        title: 'Offer List',
        items: [
          {
            url: '/tables/reactable',
            icon: '',
            title: 'Reactable',
            items: []
          },
          {
            url: '/tables/default-tables',
            icon: '',
            title: 'Default tables',
            items: []
          }
        ]
      },
    ]
  },
]
export function navigation(state = Array.from(urls), action) {
  switch (action.type) {
    case 'SET_NAVIGATION':
      return Object.assign({}, state, {
        ...action.navigation
      })
    default:
      return state
  }
}
