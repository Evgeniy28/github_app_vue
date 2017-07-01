export default {
  props: {
    repositories: {
      type: Array,
      required: true
    }
  },

  methods: {
    sortRepositories (sorting) {
      this.repositories.sort((a, b) => {
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
