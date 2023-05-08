<script>
  import { user } from "../../../components/user-store.js";
</script>

<main>
  <h1>User Information</h1>
  <ul>
    <li><strong>Id:</strong> {$user.id}</li>
    <li><strong>Name:</strong> {$user.name}</li>
    <li><strong>Role:</strong> {$user.role}</li>
    <li>
      <strong>Permissions:</strong>
      <ul>
        {#each $user.permissions as permission}
          <li>{permission}</li>
        {/each}
      </ul>
    </li>
  </ul>
</main>
