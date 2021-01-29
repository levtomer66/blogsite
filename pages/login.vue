<template>
    <auth-modal />
</template>

<script>
import AuthModal from '../components/AuthModal.vue'
export default {
  components: { AuthModal },
  middleware: 'notAuthenticated'

}
</script>
