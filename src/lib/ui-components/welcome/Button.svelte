<!-- Does ssoIconUrl and iconAlt really need to be a state? -->
<script>
  import '$src/app.css';

  let ssoIconUrl = $state("");
  let iconAlt = $state("");

  let { text, widthInVw = 50, heightInVh = 5.5, ssoPlatform } = $props();

  if (ssoPlatform) {
    ssoPlatform = ssoPlatform.toLowerCase();

    ssoIconUrl = `/ssoIcons/${ssoPlatform}.png`;
    iconAlt = `${ssoPlatform} icon`;
    text = `Entrar com ${capitalizeString(ssoPlatform)}`;
  }

  function capitalizeString(stringToCapitalize) {
      return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
  } 

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
  {#if ssoPlatform}
    <img src={ssoIconUrl} alt={iconAlt}/>
  {/if}

  {text}
</button>
