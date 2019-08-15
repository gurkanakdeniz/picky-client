export const actions = {
  getMessages (context) {
    // this.axios.get('/api/products')
    //     .then((response) => {
    //         let products = response.data.data;
    //
    //         context.commit('setProducts', products);
    //     });
  },
  addMessage (context, message) {
    context.commit('addMessage', message)
  }
}
