<script>
  import Input from '$lib/ui-components/welcome/Input.svelte';
  import Button from '$lib/ui-components/welcome/Button.svelte';
</script>

<style>
  form {
    width: 100%;
    height: calc(30% - 66px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  label {
    display: flex;
    flex-direction: column;
  }
</style>

<h1 style="font-size: 1.5em">Bem vindo(a) ao RainSafe</h1>

<form method="POST">
  <label>
    Email
    <Input name="email" type="email" style="width: 75vw;" required />
  </label>

  <label>
    Senha
    <Input name="password" type="password" minlength="6" style="width: 75vw;" required />
  </label>

  <Button text="Entrar" />
</form>

<div style="height: 15vh;"></div>
