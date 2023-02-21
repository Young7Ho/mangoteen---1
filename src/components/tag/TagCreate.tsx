import { defineComponent , PropType, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { TagForm } from './TagFrom';
import { BackIcon } from '../../shared/BackIcon';
export const TagCreate = defineComponent({
  props:{
    name: {
      type: String as PropType<string>
    }
  },
 setup: (props,context) => {
    const formData = reactive({
        name: '',
        sign: '',
    })
  return () => (
    <MainLayout>{{
        title: () => '新建标签',
        icon: () => <BackIcon/>,
        default: () => (
            <TagForm/>
        )
    }}</MainLayout>
   )
  }
})