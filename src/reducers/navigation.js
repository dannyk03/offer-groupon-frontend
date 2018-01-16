const urls = [
  {
    title: 'Menu',
    items: [
      {
        url: '',
        icon: 'dashboard',
        title: 'Dashboard',
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
      {
        url: '',
        icon: 'format_list_bulleted',
        title: 'Offer',
        items: [
          {
            url: '/offers/list',
            icon: '',
            title: 'Offer List',
            items: []
          },
          {
            url: '/offer/create',
            icon: '',
            title: 'Create Offer',
            items: []
          },
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
