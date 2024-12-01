<script>
  import '$src/app.css';

  let { type, style = "", name } = $props();
</script>

<style>
  input {
    background-color: var(--tertiary-color);
    border: none;
    border-radius: 5px;
    height: 3.5vh;
  }
</style>

<input name={name} type={type} style={style} />

