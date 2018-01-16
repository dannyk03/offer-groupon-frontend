import React from 'react'
import {Switch, Route} from 'react-router'

//layouts
import DefaultSidebar1 from './layouts/DefaultSidebar1'
import CollapsedSidebar1 from './layouts/CollapsedSidebar1'
import TopNavigation1 from './layouts/TopNavigation1'

//demos
import Demo1 from './demos/Demo1'

//dashboards
import Analytics from './dashboards/analytics'
import Geographic from './dashboards/geographic'
import ECommerce from './dashboards/e-commerce'

//forms
import DefaultForms from './forms/default-forms'
import InputGroups from './forms/input-groups'
import Validation from './forms/validation'
import Sliders from './forms/sliders'
import ReactDatetime from './forms/react-datetime'
import ReactSelect from './forms/react-select'

//icons
import Flags from './icons/flags'
import FontAwesome from './icons/font-awesome'
import Ionicons from './icons/ionicons'
import MaterialDesignIcons from './icons/material-design-icons'
import SimpleLineIcons from './icons/simple-line-icons'
import WeatherIcons from './icons/weather-icons'

//maps
import GoogleMaps from './maps/google-maps'
import VectorMaps from './maps/vector-maps'

//pages
import Home from './pages/home'
import ContactUs from './pages/contact-us'
import EmptyPage from './pages/empty-page'
import CreateAccount from './pages/create-account'
import ErrorPage from './pages/error-page'
import Login from './pages/login'
import ResetPassword from './pages/reset-password'
import Subscribe from './pages/subscribe'
import UnderMaintenance from './pages/under-maintenance'
import UnlockAccount from './pages/unlock-account'

//tables
import DefaultTables from './tables/default-tables'
import Reactable from './tables/reactable'

//ui-elements
import Badges from './ui-elements/badges'
import Breadcrumbs from './ui-elements/breadcrumbs'
import Buttons from './ui-elements/buttons'
import Images from './ui-elements/images'
import Lists from './ui-elements/lists'
import Pagination from './ui-elements/pagination'
import ProgressBars from './ui-elements/progress-bars'
import SocialMediaButtons from './ui-elements/social-media-buttons'
import Tabs from './ui-elements/tabs'
import Typography from './ui-elements/typography'
import Tooltips from './ui-elements/tooltips'

import Reapop from './notifications/reapop'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Demo1} />
    <Route path="/dashboards/analytics" component={Analytics} />
    <Route path="/dashboards/geographic" component={Geographic} />
    <Route path="/dashboards/e-commerce" component={ECommerce} />
    <Route path="/demos/demo-1" component={Demo1} />
    <Route path="/offer/create" component={DefaultForms} />
    <Route path="/forms/input-groups" component={InputGroups} />
    <Route path="/forms/react-datetime" component={ReactDatetime} />
    <Route path="/forms/react-select" component={ReactSelect} />
    <Route path="/forms/sliders" component={Sliders} />
    <Route path="/forms/validation" component={Validation} />
    <Route path="/icons/flags" component={Flags} />
    <Route path="/icons/font-awesome" component={FontAwesome} />
    <Route path="/icons/ionicons" component={Ionicons} />
    <Route
      path="/icons/material-design-icons"
      component={MaterialDesignIcons}
    />
    <Route path="/icons/simple-line-icons" component={SimpleLineIcons} />
    <Route path="/icons/weather-icons" component={WeatherIcons} />
    
    <Route path="/notifications/reapop" component={Reapop} />
    <Route path="/pages/contact-us" component={ContactUs} />
    <Route path="/pages/create-account" component={CreateAccount} />
    <Route path="/pages/empty-page" component={EmptyPage} />
    <Route path="/pages/error-page" component={ErrorPage} />
    <Route path="/pages/home" component={Home} />
    <Route path="/pages/login" component={Login} />
    <Route path="/pages/reset-password" component={ResetPassword} />
    <Route path="/pages/subscribe" component={Subscribe} />
    <Route path="/pages/under-maintenance" component={UnderMaintenance} />
    <Route path="/pages/unlock-account" component={UnlockAccount} />
    <Route path="/tables/default-tables" component={DefaultTables} />
    <Route path="/offers/list" component={Reactable} />
    <Route component={EmptyPage} />
  </Switch>
)

export default Routes
