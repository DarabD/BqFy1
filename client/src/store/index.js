import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#EdBD58',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './TECH4TIC.png',
    fullDecal: './TECH4TIC.png',
});

export default state;

