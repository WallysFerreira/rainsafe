<script>
  import '../../app.css'

  let { children } = $props();
</script>

<style>
  #welcomeBody {
      background-color: var(--primary-color);
      width: 100vw;
      height: 100vh;
    }

  :global(h1, p, a) {
      color: white;
      text-decoration: none;
    }
</style>


<div id="welcomeBody">
  {@render children()}
</div>

