<script>
  import '../app.css';
  let { children } = $props();
</script>

<nav>
  <a href="#/">Home</a> | 
  <a href="#/about">About</a>
</nav>

<main class="content">
	{@render children()}
</main>
