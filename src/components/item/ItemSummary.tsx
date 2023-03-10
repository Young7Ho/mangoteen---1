import { defineComponent, PropType, ref, onMounted, reactive, watch } from 'vue';
import { Button } from '../../shared/Button';
import { FloatButton } from '../../shared/FloatButton';
import { http } from '../../shared/Http';
import { Money } from '../../shared/Money';
import s from './ItemSummary.module.scss';
import { DateTime } from '../../shared/DateTime';
import { Center } from '../../shared/Center';
import { Icon } from '../../shared/Icon';
import { RouterLink } from 'vue-router';
export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: false
    },
    endDate: {
      type: String as PropType<string>,
      required: false
    }
  },
  setup: (props, context) => {
    const items = ref<Item[]>([])
    const hasMore = ref(false)
    const page = ref(0)
    const fetchItems = async () => {
      if(!props.startDate || !props.endDate) { return }
      const response = await http.get<Resources<Item>>('/items',{
        happen_after: props.startDate,
        happen_before: props.endDate,
        page: page.value+1},{
          _mock: 'itemIndex',
          _autoLoading: true
        }
      )  
      const { resources,pager } = response.data
      items.value?.push(...resources)
      hasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
      page.value += 1 
    }

    watch(()=>[props.startDate,props.endDate],() => {
      items.value = []
      hasMore.value = false
      page.value = 0
      fetchItems()
    })

    onMounted(fetchItems)
    const itemsBalance = reactive({
      expenses: 0, income: 0,balance: 0
    })
    const  fetchItemsBalance = async () => {
      if(!props.startDate || !props.endDate) { return }
      const response = await http.get('/items/balance', {
        happen_after: props.startDate,
        happen_before: props.endDate,
        page: page.value + 1,
        _mock: 'itemIndexBalance'
      })
      Object.assign(itemsBalance,response.data)
    }
    onMounted(fetchItemsBalance)
    watch(() => [props.startDate,props.endDate],() => {
      Object.assign(itemsBalance, {
        expenses: 0, income: 0,balance: 0
      })
      fetchItemsBalance()
    })
    return () => (
      <div class={s.wrapper}>
         {items.value && items.value.length > 0 ? (
          <>
            <ul class={s.total}>
              <li>
                <span>??????</span>
                <Money value={itemsBalance.income} />
              </li>
              <li>
                <span>??????</span>
                <Money value={itemsBalance.expenses} />
              </li>
              <li>
                <span>?????????</span>
                <Money value={itemsBalance.balance} />
              </li>
            </ul>
            <ol class={s.list}>
              {items.value.map((item) => (
                <li>
                  <div class={s.sign}>
                    <span>{item.tags[0].sign}</span>
                  </div>
                  <div class={s.text}>
                    <div class={s.tagAndAmount}>
                      <span class={s.tag}>{item.tags[0].name}</span>
                      <span class={s.amount}>???<Money value={item.amount} /></span>
                    </div>
                    <div class={s.time}><DateTime value={item.happen_at} format={"YYYY-MM-DD"}/></div>
                  </div>
                </li>
              ))}
            </ol>
            <div class={s.more}>
              {hasMore.value ?
                <Button onClick={fetchItems}>????????????</Button> :
                <span class={s.noMore}>????????????</span>
              }
            </div>
            </>) : (
              <>
              <Center class={s.pig_wrapper}>
                <Icon name="saveMoneyCan" class={s.pig} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>????????????</Button>
                </RouterLink>
              </div>
            </>
            )}
        <RouterLink to="/items/create">
          <FloatButton iconName='add' />
        </RouterLink>
      </div>
    )
  }
})