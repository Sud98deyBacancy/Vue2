import {createRouter,createWebHistory} from 'vue-router';
import PersonalData from './Components/Pages/PersonalData.vue';
import ProfessionalData from './Components/Pages/ProfessionalData.vue';
import ShowData from './Components/Pages/ShowData.vue';
    
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:ShowData},
        {path:'/Personal',component:PersonalData},
        {path:'/Professional',component:ProfessionalData},
        {path:'/Show',component:ShowData},
        {path:'/:notFound(.*)',redirect:'/'}
    ]
});
export default router;