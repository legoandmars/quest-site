
<style>

@font-face {
  font-family: Teko;
  src: url("teko-medium.otf");
}

  /* Style tab links */
.tablink {
  background-color: #2B2E32;
  width: 16.666666666%;
	
  font-family:Teko;
    
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
  height: 50px;
  line-height: 0px !important;
}

.tablink:hover {
  background-color: #d101a170;
}
</style>

<script>
	import { onMount } from 'svelte';
  
  let isBMBF = false;

	onMount(async () => {
    if(window.navigator.userAgent.toLowerCase().indexOf('bmbf_quest') > -1){
      isBMBF = true;
    }
	});
</script>

<div class="fixed w-[100%]">
  <div class="flex flex-col w-[100%]">

    {#if isBMBF}
      <div class="w-[100%] bg-[#02070E]">
        <!-- these don't have mobile only formatting, but that's OK because they'll only display in BMBF, which should have non-mobile aspect ratios every time -->
        <!-- note that if the buttons at questmodding.com ever change, these will have to be updated as they're hardcoded -->
        <button class="tablink" onclick="window.location.replace('https://questmodding.com/quest/bsaber.php')" id="Tab1">BeastSaber</button>
        <button class="tablink" onclick="window.location.replace('https://questmodding.com/quest/beatsaver.php')" id="Tab4">BeatSaver</button>
        <button class="tablink" onclick="window.location.replace('https://questmodding.com/quest/news.php')" id="Tab3">News</button>
        <button class="tablink" onclick="window.location.replace('https://questmodding.com/quest/mods.php')" id="Tab2">Get Mods</button>
        <button class="tablink" onclick="window.location.replace('https://quest.bobbie.dev/')" id="Tab5" style="background-color: rgb(209, 1, 161);">Get Models</button>
        <button class="tablink" onclick="window.open('https://discord.com/channels/@me');" id="Tab6">Discord</button>    
      </div>
    {/if}
    <nav class="hidden sm:flex items-center justify-between flex-wrap bg-[#0b0b0b] w-[100%] p-6 py-3 z-10">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" style="color: white !important;" class="text-white"><span class="font-semibold text-3xl tracking-tight">Bobbie (Quest)</span></a>
      </div>
      <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto pt-1">
        <div class="text-2xl sm:flex-grow">
          <p  class="block mt-4 inline-block sm:inline-block sm:mt-0 text-stone-200 hover:text-white mr-4">
          |
          </p>
          <a href="/packs" class="block mt-4 inline-block sm:inline-block sm:mt-0 text-stone-200 hover:text-white mr-4">
              Model Packs
          </a>
          <a href="/notes" class="block mt-4 inline-block sm:inline-block sm:mt-0 text-stone-200 hover:text-white mr-4">
              Notes
          </a>
          <a href="/walls" class="block mt-4 inline-block sm:inline-block sm:mt-0 text-stone-200 hover:text-white mr-4">
              Walls
          </a>
        </div>
        <div class="h-[48px] my-auto"></div>
        
        <a href="https://www.patreon.com/bobbievr">
          <img class="w-[48px] my-auto mx-3" src="https://i.imgur.com/ZXNgaRf.png" alt="Patreon Logo">
        </a>
  
        <a href="https://twitter.com/VRBobbie">
          <img class="w-[48px] my-auto mx-3" src="https://bobbie.dev/twitterlogo.png" alt="Twitter Logo">
        </a>
      </div>
    </nav> 
    
    <nav class="flex sm:hidden w-[100%] items-center justify-between flex-wrap bg-[#0b0b0b] p-6 py-3 z-10">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" style="color: white !important;" class="text-white"><span class="font-semibold text-3xl tracking-tight">Bobbie</span></a>
      </div>
      <div class="w-[100%] block flex-grow flex items-end flex-row-reverse w-auto pt-1">
        <div class="h-[40px] my-auto"></div> <!-- DIV for image loading to make sure size stays consistent pre-load -->
        
        <a href="https://twitter.com/VRBobbie">
          <img class="w-[40px] my-auto ml-3" src="https://bobbie.dev/twitterlogo.png" alt="Twitter Logo">
        </a>
        
        <a href="https://www.patreon.com/bobbievr">
          <img class="w-[40px] my-auto mx-3" src="https://i.imgur.com/ZXNgaRf.png" alt="Patreon Logo">
        </a>
  
      </div>
      <div class="w-[100%] bg-white opacity-50 h-[1px] mt-3 mx-auto">
      </div>
  
      <div class="w-[100%] flex items-center justify-between text-xl lg:flex-grow pt-3 pb-2">
          <a href="/packs" class="block inline-block text-stone-200 hover:text-white">
              Model Packs
          </a>
          <a href="/notes" class="block inline-block text-stone-200 hover:text-white">
              Notes
          </a>
          <a href="/walls" class="block inline-block text-stone-200 hover:text-white">
              Walls
          </a>
        </div>
    </nav>  
  </div>
</div>