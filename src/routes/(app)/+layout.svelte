<script>
  import Clock from "../../components/Clock.svelte";
</script>

<nav>
  <Clock />
  <div>
    <a href="/">home</a>
    <a href="/login">back to login</a>
    <a href="/userSettings">userSettings</a>
  </div>
</nav>

<slot />

<style>
  nav {
    display: grid;
    grid-template-columns: min-content 5fr;
  }
</style>
