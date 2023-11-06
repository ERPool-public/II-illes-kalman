<template>
    <Head title="Felhsználó adatai" />
    <TopMenu />
    <div>
      <h1>Dashboard</h1>
      <p>Ez a felhasználói vezérlőpult tartalma.</p>
    </div>
  </template>

  <script>
    import TopMenu from '@/Menus/TopMenu.vue';
    export default {
        components: {
            TopMenu: TopMenu,
        },
    };
  </script>
