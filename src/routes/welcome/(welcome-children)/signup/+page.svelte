<script>
  import Button from '$lib/ui-components/welcome/Button.svelte';
  import Input from '$lib/ui-components/welcome/Input.svelte';

  let { data } = $props();
</script>

<style>
  form {
    width: 100%;
    height: calc(76% - 66px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  #addressDiv {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .addressBlock {
    width: 100%;
  }

  .addressBlock select {
    width: 100%;
  }
</style>

<form>
  <div>
    <p>Email</p>
    <Input type="email" />
  </div>

  <div>
    <p>Senha</p>
    <Input type="password" />
  </div>

  <div>
    <p>Confirme a senha</p>
    <Input type="password" />
  </div>

  <div style="width: 185px; height: 40px;">
    <p>Data de nascimento</p>
    <Input type="date" style="width: 100%;"/>
  </div>

  <div id="addressDiv">
    <p style="font-weight: bold; font-size: 1.2em;">Endereço</p>

    <div class="addressBlock">
      <p>Rua</p>
      <Input type="text" style="width: 100%"/>

      <p>Número</p>
      <Input type="number" style="width: 100%;"/>
    </div>

    <div class="addressBlock">
      <p>Cidade</p>
      <select name="city" id="citySelect" style="height: 3.5vh; background-color: var(--tertiary-color); border-radius: 5px;">
        {#each data.cityNames as city}
          <option value={city}>{city}</option>
        {/each}
      </select>

      <p>Bairro</p>
      <Input type="text" style="width: 100%;"/>
    </div>
  </div>

  <Button text="Criar conta"/>
</form>

<div style="height: 7vh;"></div>
