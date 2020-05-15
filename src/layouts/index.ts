import BaseLayout from './BaseLayout';

const Layouts = {
  install(Vue: any) {
    Vue.component('BaseLayout', BaseLayout);
  },
};

export default Layouts;
