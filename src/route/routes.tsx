import { RouteRecordRaw } from 'vue-router';
import { Welcome } from '../views/Welcome';
import { First } from '../components/welcome/first';
import { Second } from '../components/welcome/second';
import { Third } from '../components/welcome/third';
import { Forth } from '../components/welcome/forth';
import { FirstActions } from '../components/welcome/FirstAction';
import { SecondActions } from '../components/welcome/SecondAction';
import { ThirdActions } from '../components/welcome/ThirdActions';
import { ForthActions } from '../components/welcome/ForthAction';


export const routes:RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },

    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '', redirect: '/welcome/1'},
            { path: '1',components: {main: First, footer: FirstActions}},
            { path: '2', components: {main: Second, footer: SecondActions}, },
            { path: '3', components: {main: Third, footer: ThirdActions}, },
            { path: '4', components: {main: Forth, footer: ForthActions}, },
        ]
    }
  ]