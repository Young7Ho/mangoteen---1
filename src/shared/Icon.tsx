import { defineComponent , defineProps, PropType} from 'vue';
import s from './Icon.module.scss' 
export type IconName = 'add' | 'chart' | 'clock' | 'cloud' 
| 'mangosteen' | 'saveMoneyCan' | 'menu' | 'export' | 'notify' | 'left'
export const Icon = defineComponent({
 props: {
    name: {
        type: String as PropType<IconName>,
        require: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
 },
 setup: (props,context) => {
  return () => (
    <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
    </svg>
   )
  }
})