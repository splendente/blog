<script setup lang="ts">
const { title = '', text = '', url = '' } = defineProps<{
  title: string
  text: string
  url: string
}>()

const options = {
  title: title,
  text: text,
  url: url,
}

const { share } = useShare(options)

const startShare = () => {
  return share().catch(err => err)
}
</script>

<template>
  <button
    type="button"
    class="share-button"
    @click="startShare"
  >
    <img
      src="@/assets/images/share.svg"
      alt="記事をSNSでシェアする"
      width="24"
      height="24"
    >
  </button>
</template>

<style scoped>
.share-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width:40px;
  height:40px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.share-button img {
  width: 16px;
  height: 16px;
}
</style>
