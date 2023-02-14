<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in items" :key=index>
            <router-link v-bind:to=item.path exact>
              {{ item.title }}
            </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="bgWrap">
    <video autoplay muted loop playsinline>
        <source src="../components/video/bg.mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'TOP', path: '/' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILL', path: '/skill' },
        { title: 'WORK', path: '/work' },
        { title: 'CONTACT', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  margin: 0 auto;
}
header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
}
header ul li {
  display: inline-block;
  width: 20%;
  height: 60px;
  box-sizing: border-box;
  border-left: solid 1px #FFE02B;
}
header ul li a {
  display: block;
  position: relative;
  text-decoration: none;
  color: #fff;
  background: #FFC800;
  line-height: 3;
  font-size: 1.5em;
  z-index: 1;
  height: 100%;
  font-family: "Anton", sans-serif;
}
header ul li a::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  opacity: 0;
}
header ul li a.router-link-active {
  color: transparent;
  background: transparent;
  transition: all 0.3s ease-in-out;
}
header ul li a.router-link-active::before {
  width: 100%;
  opacity: 1;
}

</style>