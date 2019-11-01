<template>
    <div class="screen_wrap cd-main-content">
        <Search />
        <MainNav />
        <Panel />
    </div>
</template>
<script>
    import Search from '../../components/search/search';
    import MainNav from '../../components/mainnav/mainnav-2';
    import Panel from '../../components/panel/panel'
    export default {
        name: 'brand',
        components: {
            Search,Panel,MainNav
        }
    };
</script>