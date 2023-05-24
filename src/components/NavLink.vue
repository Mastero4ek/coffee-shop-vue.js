<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    classLink: {
      type: String,
      required: false,
    },
  },
};
</script>
