<template>
  <div class="logo-container">
    <img
      alt="logo"
      src="/favicon.png"
      id="logo"
      @click='store.setModeToMenu' />
  </div>
  <ShoppingCartDetails v-if="store.mode === 'cart'" />
  <Menu v-else/>
</template>

<script>
import Menu from '@/components/Menu.vue'
import ShoppingCartDetails from '@/components/ShoppingCartDetails.vue'
import { store } from '@/stores/mode.js'

export default {
  name: 'App',
  components: {
    Menu,
    ShoppingCartDetails
  },
  setup() {
    return {
      store,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
#logo {
  height: 100px;
  margin-top: 1em;
}
/* css reset; modified for own needs
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* some global styles */
button {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #A0334B;
  color: #FFF;
  border: none;
  border-radius: 3px;
  padding: .3em;
  font-size: 1.2em;
  cursor: pointer;
}

.logo-container {
  width: 100vw;
}

#logo {
  cursor: pointer;
}

</style>
