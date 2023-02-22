import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { SkipFeature } from '../../shared/SkipFeature';
const onClick = () => {
  localStorage.setItem('skipFeature','yes')
}
export const ForthActions = () => (
  <div class={s.actions}>
    <SkipFeature class={s.fake}/>
    <span onClick={onClick}>
      <RouterLink to="/items" >完成</RouterLink>
    </span>

    <SkipFeature  class={s.fake}/>
  </div>
)

ForthActions.displayName = 'ForthActions'