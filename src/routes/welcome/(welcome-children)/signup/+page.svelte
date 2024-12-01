<script>
  import Button from '$lib/ui-components/welcome/Button.svelte';

  let { data } = $props();
</script>

<style>
  form {
    width: 100%;
    height: calc(66% - 66px);
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

  .addressBlock input, select {
    width: 100%;
  }
</style>

<form>
  <div>
    <p>Email</p>
    <input type="email" />
  </div>

  <div>
    <p>Senha</p>
    <input type="password" />
  </div>

  <div>
    <p>Confirme a senha</p>
    <input type="password" />
  </div>

  <div style="width: 185px; height: 40px;">
    <p>Data de nascimento</p>
    <input type="date" style="width: 100%;"/>
  </div>

  <div id="addressDiv">
    <p style="font-weight: bold; font-size: 1.2em;">Endereço</p>

    <div class="addressBlock">
      <p>Rua</p>
      <input type="text" />

      <p>Número</p>
      <input type="number" />
    </div>

    <div class="addressBlock">
      <p>Cidade</p>
      <select name="city" id="citySelect">
        {#each data.cityNames as city}
          <option value={city}>{city}</option>
        {/each}
      </select>

      <p>Bairro</p>
      <input type="text" />
    </div>
  </div>

  <Button text="Criar conta"/>
</form>

<div style="height: 7vh;"></div>
