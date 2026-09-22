<script lang="ts">
  import '../app.css';
  import { Toast } from '@skeletonlabs/skeleton-svelte';
  import { toaster } from '$lib/toaster';

  let { children } = $props();
</script>

<nav>
  <a href="#/">Home</a> |
  <a href="#/about">About</a>
</nav>

<main class="content">
  <div class="app-container min-h-screen bg-surface-50-950 transition-colors duration-200">
    {@render children?.()}
  </div>
</main>

<Toast.Group {toaster}>
  {#snippet children(toast)}
    <Toast {toast}>
      <Toast.Message>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
      </Toast.Message>
      <Toast.CloseTrigger />
    </Toast>
  {/snippet}
</Toast.Group>
