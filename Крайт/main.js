import './style.scss'
import { Select } from './src/scripts/select'

const select = new Select('#select', {
   placeholder: 'Выбери пожалуйста элемент',
   data: [
      { id: '1', value: 'Санкт-Петербург' },
      { id: '2', value: 'Москва' },
      { id: '3', value: 'Нижний Новгород' },
      { id: '4', value: 'Ростов-на-Дону' },
   ],
   onSelect(item) {
      console.log('Selected Item', item)
   }
})


window.s = select