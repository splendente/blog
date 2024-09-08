import YearSelect from '@/components/year-select.vue'

export default {
  title: 'components/year-select',
  component: YearSelect,
  tags: ['autodocs'],
  render: () => ({
    components: { YearSelect },
    setup() {
      const targetYearModel = ref(2024)
      return { targetYearModel }
    },
    template: '<year-select v-model="targetYearModel" />',
  }),
}

export const Default = {}
