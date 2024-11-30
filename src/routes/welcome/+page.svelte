<script>
  import Button from '$lib/ui-components/welcome/Button.svelte';
</script>

<style>
  a {
      display: block;
      padding: 2vh 0;
      text-align: center;
      text-decoration: underline white;
  }

  a, p {
      font-size: 1.1em;
  }
</style>

<h1>Logo RainSafe</h1>

<Button text="Cadastrar-se" fontSizeInEm=1.1 widthInVw=62.7 heightInVh=6.25 />
<p>Já possui uma conta?</p>
<a href="/welcome/login">Faça login</a>

<Button ssoPlatform="Google" widthInVw=64 heightInVh=4 />
<Button ssoPlatform="faceBook" widthInVw=64 heightInVh=4 />
