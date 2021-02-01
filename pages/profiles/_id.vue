<template>
    <div>
        {{ user }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    async fetch() {
        const id = this.$route.params.id;
        try {
            const user = await this.$axios.get(`${this.$config.baseURL}/api/users/${id}`);
            console.log(`Fetched: ${id}`);
            this.user = user.data
            // console.log(user);
            this.$toast.success('User set!');
        } catch(e) {
            console.log(`Couldn't fetch user id: ${id}`)
        }
    }
}
</script>
