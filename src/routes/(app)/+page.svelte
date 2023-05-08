<script>
  export let data;
  import { onMount } from "svelte";
  import { user } from "../../components/user-store.js";
  onMount(() => {
    console.log("mounting landing page");
    console.log(data);

    // TODO: fetch user data from database
    // const response = await fetch("api/user")
    // const data = await Response.json()
    // user.set(data)
  });
</script>

<main>
  <h1>Welcome, {$user.name}!</h1>
</main>
