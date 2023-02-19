import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeature } from '../../shared/SkipFeature';
export const ThirdActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <SkipFeature  class={s.fake}/>
    <RouterLink to="/welcome/4" >下一页</RouterLink>
    <SkipFeature  />
  </div>
}

ThirdActions.displayName = 'ThirdActions'