import { defineComponent , PropType, reactive } from 'vue';
import s from './Tag.module.scss' 
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { TagForm } from './TagFrom';
import { BackIcon } from '../../shared/BackIcon';
import { useRoute, useRouter } from 'vue-router';
import { Dialog } from 'vant';
import { http } from '../../shared/Http';
export const TagEdit = defineComponent({
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
    const route = useRoute()
    const router = useRouter()
    const numberId = parseInt(route.params.id!.toString())
    if(Number.isNaN(numberId)){
      return () => <div> id 不存在</div>
    }
    const onError = () => {
      Dialog.alert({title: '提示',message: '删除失败'})
    }
    const onDelete = async (options?:{withItems?:boolean})=> {
      await Dialog.confirm({
        title: '确认',
        message: '你真的要删除吗'
      })
      await http.delete(`/tags/${numberId}`,{
        withItems: options?.withItems ? 'true' : 'false'
      },{_autoLoading: true}).catch(onError)
      router.back()
    }
  return () => (
    <MainLayout>{{
        title: () => '编辑标签',
        icon: () => <BackIcon/>,
        default: () => (<>
            <TagForm id={numberId} />
            <div class={s.actions}>
            <Button level='danger' class={s.removeTags} onClick={() => onDelete()}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems} onClick={() => onDelete({withItems:true})}>删除标签和记账</Button>
            </div>
            </>
        )
    }}</MainLayout>
   )
  }
})