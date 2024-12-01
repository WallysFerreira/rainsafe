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

  label {
    display: flex;
    flex-direction: column;
  }
</style>

<form>
  <label>
    Email
    <Input type="email" />
  </label>

  <label>
    Senha
    <Input type="password" />
  </label>

  <label>
    Confirme a senha
    <Input type="password" />
  </label>

  <label style="width: 185px; height: 40px;">
    Data de nascimento
    <Input type="date" style="width: 100%;"/>
  </label>

  <div id="addressDiv">
    <p style="font-weight: bold; font-size: 1.2em;">Endereço</p>

    <div class="addressBlock">
      <label>
        Rua
        <Input type="text" style="width: 100%"/>
      </label>

      <label>
        Número
        <Input type="number" style="width: 100%;"/>
      </label>
    </div>

    <div class="addressBlock">
      <label>
        Cidade
        <select name="city" id="citySelect" style="height: 3.5vh; background-color: var(--tertiary-color); border-radius: 5px;">
          {#each data.cityNames as city}
            <option value={city}>{city}</option>
          {/each}
        </select>
      </label>

      <label>
        Bairro
        <Input type="text" style="width: 100%;"/>
      </label>
    </div>
  </div>

  <Button text="Criar conta"/>
</form>

<div style="height: 7vh;"></div>
