<script>
  import Button from '$lib/ui-components/welcome/Button.svelte';
</script>

<style>
  a {
      display: block;
      padding-top: 0.6vh;
      padding-bottom: 2vh;
      text-align: center;
      text-decoration: underline white;
  }

  a, p {
      font-size: 1.1em;
  }

  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  #mainButtons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #ssoButtons > :global(button) {
    margin-top: 2vh;
  }
</style>

<div id="wrapper">
  <img src="/raincife.png" alt="Raincife logo" style="width: 144px;"/>

  <div id="mainButtons">
    <Button text="Cadastrar-se" fontSizeInEm=1.1 widthInVw=62.7 heightInVh=6.25 />
    <p style="margin-top: 2vh">Já possui uma conta?</p>
    <a href="/welcome/login">Faça login</a>
  </div>

  <div id="ssoButtons">
    <Button ssoPlatform="Google" widthInVw=64 heightInVh=4 />
    <Button ssoPlatform="faceBook" widthInVw=64 heightInVh=4 />
  </div>
</div>
