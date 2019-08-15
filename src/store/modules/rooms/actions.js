export const actions = {
  getRooms (context) {
    // this.axios.get('/api/products')
    //     .then((response) => {
    //         let products = response.data.data;
    //
    //         context.commit('setProducts', products);
    //     });
  },
  addRoom (context, room) {
    context.commit('addRoom', room)
  }
}
