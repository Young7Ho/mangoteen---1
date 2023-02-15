import s from './WelcomeLayout.module.scss';
import clock from '../../assets/icons/ring.svg';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';
export const Second: FunctionalComponent = () => {
  return <WelcomeLayout>{{
    icon: () => <img src={clock}></img>,
    title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
    button: () => <>
      <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
      <RouterLink to="/welcome/3" >下一页</RouterLink>
      <RouterLink to="/start" >跳过</RouterLink>
    </>
  }}</WelcomeLayout>
}

Second.displayName = 'Second'