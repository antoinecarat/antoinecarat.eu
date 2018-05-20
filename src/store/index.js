import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TODO: replace it with the right things. In store because it's used by several components;
    currentSchool: null,
    // currentJob: null
    currentJob: {
      title: 'Cloud intern',
      location: 'VSCT, Nantes, France',
      end: '13/07/2018'
    }
    // currentJob: { title: "Cloud intern", location: 'VSCT, Nantes, France'}
  },
  mutations: {
      
  }
})
