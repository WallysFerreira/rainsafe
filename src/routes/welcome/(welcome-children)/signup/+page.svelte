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

<p style="font-weight: bold; font-size: 1.2em;">Endereço</p>
<p>Rua</p>
<input type="text" />
<p>Número</p>
<input type="number" />
<p>Cidade</p>
<input type="text" />
<p>Bairro</p>
<input type="text" />

<Button text="Criar conta"/>

