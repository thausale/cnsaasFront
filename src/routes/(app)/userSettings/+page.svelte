<script>
  import { goto } from "$app/navigation";
  import { userStore } from "../../../components/user-store";
  const user = userStore.getInfo();
  console.log(user);
  if (!user.id) {
    goto("/login");
  }
</script>

<main>
  <h1>User Information</h1>
  <ul>
    <li><strong>Id:</strong> {user.id}</li>
    <li><strong>Name:</strong> {user.name}</li>
    <li><strong>Role:</strong> {user.role}</li>
    <li>
      {#if user.permissions && user.permissions.length > 0}
        <ul>
          <strong>Permissions:</strong>
          {#each user.permissions as permission}
            <li>{permission}</li>
          {/each}
        </ul>
      {:else}
        <p>No permissions found.</p>
      {/if}
    </li>
  </ul>
</main>
