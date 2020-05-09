<template>
    <div ref="material">
        <mainNav></mainNav>
        <router-view></router-view>
    </div>
</template>

<script>
    import mainNav from '../components/mainNav'

    export default {
        name: 'File',
        data () {
            return {}
        },
        components: {
            mainNav
        },
        created () {},
        methods: {
            handleBack () {
                this.$router.push({
                    path: '/base/'
                })
            }
        }
    }
</script>

<style lang="scss" scoped></style>
