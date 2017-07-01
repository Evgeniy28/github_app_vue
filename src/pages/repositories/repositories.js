import RepositoriesTable from '@/components/repositories-table/repositories-table.vue'

export default {
  computed: {
    repositories () {
      return this.$root.repositories
    }
  },

  components: {
    RepositoriesTable
  }
}
