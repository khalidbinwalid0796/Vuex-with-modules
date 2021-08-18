import Axios from "axios"

export const admin = {
    namespaced: true,

    state:{
      admin: {},
      products: [
	      {name: 'Banana Skin', price: 20},
	      {name: 'Shiny Star', price: 40},
	      {name: 'Green Shells', price: 60},
	      {name: 'Red Shells', price: 80}
    	]
    },
    getters:{
        getAuthUser(state) {
            return state.admin;
        }
    },
    actions: {
        getUser(context){
            Axios.get('/admin/user')
            .then((result) => {
                 context.commit('getUser',result.data.admin)
            }).catch((err) => {
                
            });
         },
    
    },

    mutations: {
        getUser(state, payload){
            return state.admin = payload
        }
    }
      
}