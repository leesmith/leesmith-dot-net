<template>
  <div>
    <fa-icon :icon="['far', 'calendar-alt']" /> December 5, 2018
    <h1 class="title has-text-brown">Migrating to minpac for Vim</h1>
    <div class="content">
      <p>
        I've just done an overhaul to my <a href="https://github.com/leesmith/dotfiles" target="_blank" rel="noopener">dotfiles</a> and I wanted to document how and why I migrated from <a href="https://github.com/tpope/vim-pathogen" target="_blank" rel="noopener">pathogen</a> to <a href="https://github.com/k-takata/minpac" target="_blank" rel="noopener">minpac</a>.
      </p>
      <h3 class="has-text-brown">Why minpac</h3>
      <p>
        Minpac is described as a "minimal package manager for Vim 8". Ok, great. How is minpac different or better than the package managers that have been around for years (Vundle, vim-plug, pathogen, etc.)?
      </p>
      <p>
        Now that Vim 8 ships with native package management, minpac builds on top of this functionality, allowing for a more lightweight plugin.  Unlike its predesessors, minpac doesn't invent it's own solution for managing the runtimepath. Another Vim 8 feature that minpac leverages is the job control feature. This allows minpac to install and update plugins in parallel.
      </p>
      <h3 class="has-text-brown">Configuring minpac</h3>
      <p>
        So for me, coming from pathogen, I can delete the <em>~/.vim/bundle</em> directory and create the directory where minpac will live.
      </p>
      <pre v-highlightjs><code class="bash">rm -rf ~/.vim/bundle
mkdir -p ~/.vim/pack/minpac/opt
git clone https://github.com/k-takata/minpac.git ~/.vim/pack/minpac/opt/minpac</code></pre>
      <p>
        From here, it's a matter of configuring your <em>.vimrc</em> for minpac. The following is a basic example of what you might include in your <em>.vimrc</em>. Minpac's install instructions offer something more simple than this but I like this example because it offers the ability to have a more flexible <em>.vimrc</em> for the case where you want to use the same <em>.vimrc</em> in different environments (like on a server that doesn't have your plugins installed).
      </p>
      <pre v-highlightjs><code class="vim">" ~/.vimrc
" Try to load minpac.
packadd minpac

if !exists('*minpac#init')
  " minpac is not available.

  " Settings for plugin-less environment.
  " ...
else
  " minpac is available.
  " init with verbosity 3 to see minpac work
  call minpac#init({'verbose': 3})
  call minpac#add('k-takata/minpac', {'type': 'opt'})

  " Additional plugins here.
  call minpac#add('airblade/vim-gitgutter')
  call minpac#add('altercation/vim-colors-solarized')
  call minpac#add('itchyny/lightline.vim')
  call minpac#add('prettier/vim-prettier')
  call minpac#add('tpope/vim-commentary')
  call minpac#add('tpope/vim-endwise')
  call minpac#add('tpope/vim-fugitive')
  call minpac#add('tpope/vim-repeat')
  call minpac#add('tpope/vim-surround')
  " ...

  " minpac utility commands
  command! PackUpdate call minpac#update()
  command! PackClean call minpac#clean()
  command! PackStatus call minpac#status()

  " Plugin settings here.
  " ...
endif

" Common settings here.
"...</code></pre>
      <p>
        Here's minpac in action. After I open vim, I update all plugins specified in my <em>.vimrc</em> using the utility command <em>:PackUpdate</em>. After the update is finished, <em>:PackStatus</em> shows a summary of what changed.
      </p>
      <p>
        <img src="~/assets/img/minpac.gif" alt="minpac" />
      </p>
      <p>
        Of course, minpac also works with <a href="https://neovim.io/" target="_blank" rel="noopener">Neovim</a> if you prefer that over Vim 8. Check out the docs for a slightly different install process.
      </p>
      <p>Happy Vim'ing! <span class="is-size-3">🍻</span></p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Migrating to minpac for vim - LeeSmith.net",
      meta: [
        { hid: "description", name: "description", content: "Migrating to minpac for Vim" }
      ]
    };
  }
};
</script>
