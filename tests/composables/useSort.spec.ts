import { describe, expect, test } from 'vitest'

describe('useSort', async () => {
  // useSortを初期化
  const { desc, toggleSort } = await useSort()

  describe('toggleSort()', async () => {
    await toggleSort()

    test('descの値がfalseに変更されている', () => {
      expect(desc.value).toBe(false)
    })
  })
})
