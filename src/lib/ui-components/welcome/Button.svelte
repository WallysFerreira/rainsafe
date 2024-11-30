<script>
  import '$src/app.css';

  export let text;
  export let widthInVw = 50;
  export let heightInVh = 5.5;
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
  {text}
</button>
