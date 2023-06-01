<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-link classLink="header__item" :link="links.header.link">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-link>

      <nav-link
        classLink="header__item"
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
      >
      </nav-link>
    </ul>
  </header>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
  components: { NavLink },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>
