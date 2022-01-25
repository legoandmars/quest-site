import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const handleError = ({ status, path, referrer, referenceType }) => {
	if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
	console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			subfolders: false,
			onError: handleError,
			entries: [  
				'/FallGuys.html',     
				'/DripNotes.html',
				'/FallGuy.html',      
				'/BlockParty.html',
				'/BlockPartyCC.html', 
				'/Slime.html',
				'/FallGuyWall.html', 
				'/Water.html',
				'/LavaWalls.html',   
				'/Portal.html',
				'/Wool.html',        
				'/StainedGlass.html',
				'/Glass.html',       
				'/RandomOres.html',
				'/DiamondOre.html',  
				'/Grass.html',
				'/Mycelium.html',
				'/RocketLeagueBall.html',
				'/AnimatedRocketLeagueBall.html',
				'/MinecraftWallPack.html',
				'/Minecraft.html'
			]
		}	
	}
};

export default config;
