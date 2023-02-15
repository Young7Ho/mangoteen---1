import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';
export const Forth: FunctionalComponent = () => {
  return <WelcomeLayout>{{
    icon: () => <img src={cloud}></img>,
    title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
    button: () => <>
      <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
      <RouterLink to="/start" >完成</RouterLink>
      <RouterLink to="/start" >跳过</RouterLink>
    </>
  }}</WelcomeLayout>
}

Forth.displayName = 'Forth'
