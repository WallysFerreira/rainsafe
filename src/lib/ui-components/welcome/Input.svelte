<script>
  import '$src/app.css';

  let {
    type,
    style = "",
    name,
    placeholder,
    pattern,
    required,
    minlength,
    maxlength
  } = $props();
</script>

<style>
  input {
    background-color: var(--tertiary-color);
    border: none;
    border-radius: 5px;
    height: 3.5vh;
  }
</style>

<input name={name} type={type} style={style} placeholder={placeholder} pattern={pattern} required={required} minlength={minlength} maxlength={maxlength} />

