import ckPagination from './ckPagination'
import ckMainNav from './ckMainNav'

const loadComponents = {
  install (Vue) {
    Vue.component('ckPagination', ckPagination)
    Vue.component('ckMainNav', ckMainNav)
  }
}
export default loadComponents
