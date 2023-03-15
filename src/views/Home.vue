<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100"/>
        <px-assets-table-vue v-if="!isLoading" :assets="assets"/>
    </div>
</template>

<script>
    import PxAssetsTableVue from '@/components/PxAssetsTable.vue';
    import api from '@/api';


    export default {
        name: "HomePage",

        components: {
            PxAssetsTableVue
        },

        data() {
            return {
                isLoading: false,
                assets: []
            }
        },

        created() {
            this.isLoading = true;
            api.getAssets().then(res => {
                this.assets = res.data.data;
            }).finally(() => {
                this.isLoading = false;
            })
        }
    };

</script>
