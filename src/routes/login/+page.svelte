<script>
  import { goto } from "$app/navigation";
  import { getContext, onMount } from "svelte";
  import { get } from "svelte/store";
  import cookie from "cookie";
  import { env } from "$env/dynamic/public";

  const endpoint = env.PUBLIC_API_ENDPOINT;

  let user;
  let email = "admin@admin";
  let password = "password";

  onMount(() => {
    console.log("onmount launching");
    const cookies = cookie.parse(document.cookie);
    console.log(cookies);
  });

  async function handleSubmit() {
    console.log(email, password);
    console.log(endpoint);
    //TODO:Check login info with laravel api
    const response = await fetch(`${endpoint}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    //This now holds the user's data
    console.log(data);
    //TODO:create JWT token from laravel API

    //TODO:Set JWT in a session cookie

    //TODO:Go to landing page
    // goto("/");
  }
</script>

<div>
  <h2>api endpoint is {endpoint}</h2>
  <h1>Welcome to cnSaas</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Email:
      <!-- TODO: add type=email when done -->
      <input type="text" bind:value={email} required />
    </label>

    <label>
      Password:
      <!-- TODO: add type=password when done -->
      <input type="text" bind:value={password} required />
    </label>

    <button type="submit">Login</button>
  </form>
  <button
    on:click={function () {
      goto("/");
    }}>Bypass login</button
  >
</div>

<style>
  div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
    max-width: 400px;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    background-color: #007aff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
