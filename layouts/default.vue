<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        :to="link.url"
        >{{ link.label }}</v-btn
      >
      <v-spacer></v-spacer>
      <v-toolbar-title>John Doe</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer color="primary" padless>
      <v-layout justify-center wrap>
        <v-flex primary py-4 text-center white--text
          ><a href="https://tragio.pt" target="_blank" style="color: #fff"
            >tragio.pt</a
          >
          ® {{ new Date().getFullYear() }}</v-flex
        >
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Contacts',
          url: '/contacts',
        },
        {
          label: 'Login',
          url: '/login',
        },
      ],
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://tragio.pt' + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
