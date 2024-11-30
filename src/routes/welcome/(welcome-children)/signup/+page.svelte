<script>
  import Button from '$lib/ui-components/welcome/Button.svelte';
</script>

<p>Email ou número de telefone</p>
<input type="text" />

<p>Senha</p>
<input type="password" />

<p>Confirme a senha</p>
<input type="password" />

<p>Data de nascimento</p>
<input type="date" />

<p>Localização</p>
<select name="location" id="locationSelect">
  <option value="loc1">Localizacao 1</option>
</select>

<Button text="Criar conta"/>

