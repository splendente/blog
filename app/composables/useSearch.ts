import Fuse from 'fuse.js'

export async function useSearch() {
  const keyword = ref<string>('')
  const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('content'))
  const fuse = new Fuse(data.value ?? [], {
    keys: ['title', 'description'],
  })

  const results = computed(() => fuse.search(toValue(keyword.value)).slice(0, 10))

  return {
    keyword,
    results,
  }
}
