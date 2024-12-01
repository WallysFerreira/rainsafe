<script>
  import '../../app.css'

  let { children } = $props();
</script>

<style>
  #welcomeBody {
      background-color: var(--primary-color);
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

  :global(h1, p, a, label) {
      color: white;
      text-decoration: none;
    }
</style>


<div id="welcomeBody">
  {@render children()}
</div>

