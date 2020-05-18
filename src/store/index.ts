import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const { CourseStore } = require('@/resources/Courses');
const { SocialStore } = require('@/resources/Social');

export default new Vuex.Store({
  modules: {
    courses: CourseStore,
    social: SocialStore,
  }
});
