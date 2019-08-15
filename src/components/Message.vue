<template>
  <div>
    {{ message.message }}
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Message',
  props: ['message'],
  data() {
    return {
      test: false
    }
  },
  methods: {}
}
</script>
