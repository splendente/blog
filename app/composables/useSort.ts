export function useSort() {
  // 降順かどうか
  const desc = ref<boolean>(true)

  /**
   * 降順と昇順を切り替える
   */
  const toggleSort = () => {
    desc.value = !desc.value
  }

  return {
    desc,
    toggleSort,
  }
}
