import { defineComponent , PropType } from 'vue';
import { RouterLink } from 'vue-router';
export const SkipFeature = defineComponent({
  props:{
    name: {
      type: String as PropType<string>
    }
  },
 setup: (props,context) => {
    const onClick = () => {
        localStorage.setItem('skipFeature','yes')
    }
  return () => (
    <span onClick={onClick}>
        <RouterLink to="/start">跳过</RouterLink>
    </span>
    
   )
  }
})