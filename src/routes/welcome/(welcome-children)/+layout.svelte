<script>
  import { goto } from '$app/navigation';
  let { children } = $props();
</script>

<style>
  nav {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: none;
    border: none;
  }

  #raincifeLogo {
    width: 66px;
  }
</style>

<nav>
  <button onclick={() => goto("/welcome")}>
    <img src="/back.png" alt="Button to go back" />
  </button>

  <div style="width: 66px; height: 66px;" id="raincifeLogo"></div>

  <div style="width: 10vw;"></div>
</nav>

{@render children()}
