import Home from '../container/Home'
import About from '../container/Aboutus'
import Learn from '../container/Learn'
import Faq from '../container/Faq'
import Contact from '../container/Contact'
import Login from '../container/Login'
import Register from '../container/Register'
import Dashboard from '../container/Dashboard'

import KYC from '../container/Kyc'
import Send from '../container/Send'
import ChangePassword from '../container/Changepassword'
const route = [
    // {
    //     path:'/aboutus',
    //     title:'About | Jupit',
    //     isAuthenticated:false,
    //     component:About,

    // },
    // {
    //     path:'/learnwithus',
    //     title:'Learn | Jupit',
    //     isAuthenticated:false,
    //     component:Learn,

    // },
    // {
    //     path:'/faq',
    //     title:'Faq | Jupit',
    //     isAuthenticated:false,
    //     component:Faq,

    // },
    // {
    //     path:'/contact-us',
    //     title:'Contact Us | Jupit',
    //     isAuthenticated:false,
    //     component:Contact,

    // },
    {
        path:'/user/changepassword/:codeid/:userid',
        title:'Reset Password | Jupit',
        isAuthenticated:false,
        component:ChangePassword,

    },
    {
        path:'/client/signin',
        title:'Client SignIn | Jupit',
        isAuthenticated:false,
        component:Login,

    },
    {
        path:'/client/signup',
        title:'Client SignUp | Jupit',
        isAuthenticated:false,
        component:Register,

    },
    {
        path:'/client/kyc',
        title:'Client KYC | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/transactions-history',
        title:'Client Transactions | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/wallet',
        title:'Client Wallet | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/settings',
        title:'Client Settings | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/notification',
        title:'Client Notification | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/logout',
        title:'Client Logout | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/sendbtc',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/sendusdt',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/tradegiftcard',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/buybtc',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/buyusdt',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/sellbtc',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/withdrawal',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client/sellusdt',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    {
        path:'/client',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },
    
    
    
    // {
    //     path:'/',
    //     title:'Client SignIn | Jupit',
    //     isAuthenticated:false,
    //     component:Login,
    // }
    
    {
        path:'/',
        title:'Home | Jupit',
        isAuthenticated:false,
        component:Home,

    },
    

   
]

export default route;