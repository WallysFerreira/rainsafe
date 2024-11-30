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
</style>


<div id="welcomeBody">
  {@render children()}
</div>

