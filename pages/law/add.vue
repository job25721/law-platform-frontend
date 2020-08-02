<template>
  <div>
    <AddForm v-if="!pro" />
    <AddFormPro v-if="pro" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pro: true,
    }
  },
}
</script>
