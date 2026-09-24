<script lang="ts">
  import '../app.css';
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import Toaster from '$lib/components/Toaster.svelte';

  const links = [
    { label: 'Home', href: '/#' },
    { label: 'About', href: '#/about' },
  ];

  let { children } = $props();
</script>

<div class="app-container">
  <header class="sticky top-0 z-50 w-full flex-none">
    <AppBar>
      <AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
        <AppBar.Headline>
          <div class="flex items-center gap-4">
            {#each links as link}
              <a
                href={link.href}
                class="hover:text-primary-500 transition-colors">{link.label}</a
              >
            {/each}
          </div>
        </AppBar.Headline>
      </AppBar.Toolbar>
    </AppBar>
  </header>

  <main class="content">
    <div class="min-h-screen bg-surface-50-950 transition-colors duration-200">
      {@render children?.()}
    </div>
  </main>
</div>

<Toaster />
