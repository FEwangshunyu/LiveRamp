import store from '@/store';
import router from '@/router';
router.beforeEach( (to, from, next) => {
    
    // store.dispatch('app/getCityData')
    // store.dispatch('app/getZCData');
    // store.dispatch('app/getCXData');
    // store.dispatch('app/getContract');
    next()
})