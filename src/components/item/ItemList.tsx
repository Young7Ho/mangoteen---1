import { Overlay } from 'vant';
import { defineComponent, PropType, ref, reactive, watchEffect } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { TimeTabsLayout } from '../../layouts/TimeTabsLayout';
import { Form, FormItem } from '../../shared/Form';
import { Icon } from '../../shared/Icon';
import { OverLayIcon } from '../../shared/Overlay';
import { Tab, Tabs } from '../../shared/Tabs';
import { Time } from '../../shared/time';
import s from './ItemList.module.scss' 
import { ItemSummary } from './ItemSummary';
export const ItemList = defineComponent({
 setup: (props,context) => {
    return () => (<TimeTabsLayout component={ItemSummary} />)
  }
})