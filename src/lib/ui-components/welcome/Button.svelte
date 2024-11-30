<script>
  import '$src/app.css';

  let { text, widthInVw = 50, heightInVh = 5.5, isSso } = $props();
</script>

<style>
  button {
      color: var(--primary-color);
      background-color: var(--tertiary-color);
      border-radius: 4.5vw;
      font-weight: bold;
      padding: 0;
      font-size: 1.1em;
      border: none;
    }
</style>

<button style="height: {heightInVh}vh; width: {widthInVw}vw">
  {#if isSso}
    Todo
  {:else}
    {text}
  {/if}
</button>
