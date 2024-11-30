<!-- Does ssoIconUrl and iconAlt really need to be a state? -->
<script>
  import '$src/app.css';

  let ssoIconUrl = $state("");
  let iconAlt = $state("");

  let { text, fontSizeInEm = 0.9, widthInVw = 50, heightInVh = 5.5, ssoPlatform, onclick } = $props();

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
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  button:active {
    background-color: grey;
    transition: all 0.5s;
  }
</style>

<button style="height: {heightInVh}vh; width: {widthInVw}vw; font-size: {fontSizeInEm}em;" onclick={onclick}>
    {#if ssoPlatform}
      <img src={ssoIconUrl} alt={iconAlt}/>
    {/if}

    {text}
</button>
