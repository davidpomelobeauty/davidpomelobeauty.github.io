<script lang="ts">
  import '../app.css';
  import Toaster from '$lib/components/Toaster.svelte';
  import Header from './Header.svelte';

  let { children } = $props();
</script>

<div class="app-container">
  <Header />
  <main class="content">
    <div class="bg-surface-50-950 transition-colors duration-200">
      {@render children?.()}
    </div>
  </main>
</div>

<Toaster />
