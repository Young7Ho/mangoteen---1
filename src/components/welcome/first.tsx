import s from './WelcomeLayout.module.scss';
import pig from '../../assets/icons/saveMoneyCan.svg';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';
export const First: FunctionalComponent = () => {
  return <WelcomeLayout>{{
    icon: () => <img src={pig}></img>,
    title: () => <h2>会挣钱<br/>还会省钱</h2>,
    button: () => <>
      <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
      <RouterLink to="/welcome/2" >下一页</RouterLink>
      <RouterLink to="/start" >跳过</RouterLink>
    </>
  }}</WelcomeLayout>
}

First.displayName = 'First'
