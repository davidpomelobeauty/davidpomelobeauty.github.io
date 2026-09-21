<script>
  import '../app.css';
  let { children } = $props();
</script>

<nav>
  <a href="#/">Home</a> | 
  <a href="#/about">About</a>
</nav>

<main class="content">
  <div class="app-container min-h-screen bg-surface-50-950 transition-colors duration-200">
  	{@render children()}
  </div>
</main>
