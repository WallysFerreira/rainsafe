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

<form method="POST">
  <label>
    Nome completo
    <Input name="fullName" type="text" required/>
  </label>

  <label>
    Telefone
    <Input name="phone" type="text" placeholder="DDD + Numero" pattern="[0-9]*" minlength="11" maxlength="11" />
  </label>

  <label>
    Email
    <Input name="email" type="email" required />
  </label>

  <label>
    Senha
    <Input name="password" type="password" required />
  </label>

  <!--
  <label style="width: 185px; height: 40px;">
    Data de nascimento
    <Input name="birthDate" type="date" style="width: 100%;" required />
  </label>
  -->

  <div id="addressDiv">
    <p style="font-weight: bold; font-size: 1.2em;">Endereço</p>

    <div class="addressBlock">
      <label>
        Rua
        <Input name="street" type="text" style="width: 100%" required/>
      </label>

      <label>
        Número
        <Input name="number" type="number" style="width: 100%;" required/>
      </label>
    </div>

    <div class="addressBlock">
      <label>
        Cidade
        <select name="city" id="citySelect" required style="height: 3.5vh; background-color: var(--tertiary-color); border-radius: 5px;">
          {#each data.cityNames as city}
            <option value={city}>{city}</option>
          {/each}
        </select>
      </label>

      <label>
        Bairro
        <Input name="neighbourhood" type="text" style="width: 100%;" required/>
      </label>
    </div>
  </div>

  <Button text="Criar conta"/>
</form>

<div style="height: 7vh;"></div>
