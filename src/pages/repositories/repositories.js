export default {
  computed: {
    repositories () {
      return this.$root.repositories
    }
  },

  methods: {
    sortRepositories (sorting) {
      this.repositories.sort((a, b) => {
        console.log(sorting, a.name, b.name)
        if (a[sorting.name] > b[sorting.name]) {
          return sorting.type === 'asc' ? 1 : -1;
        }

        if (a[sorting.name] < b[sorting.name]) {
          return sorting.type === 'asc' ? -1 : 1;
        }

        return 0
      })
    }
  }
}
