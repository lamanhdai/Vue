export default {
  computed: {
    filterSearch: function() {
      return this.notifications.filter((noti) => {
        return noti.title.match(this.search);
      });
    }
  }
}