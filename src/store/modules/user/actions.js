export const actions = {
  getUser (context) {
    // this.axios.get('/api/products')
    //     .then((response) => {
    //         let products = response.data.data;
    //
    //         context.commit('setProducts', products);
    //     });
  },
  setUser (context, user) {
    context.commit('setUser', user)
  }
}
