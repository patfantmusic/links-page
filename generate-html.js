const pug = require('pug');
const links = {
  "Apple Music": {
    icon: "images/apple.png",
    url: "https://music.apple.com/us/artist/pat-fant/1716633019"
  },
  "BandCamp": {
    icon: "images/bandcamp.png",
    url: "https://patfantmusic.bandcamp.com"
  },
  "Instagram": {
    icon: "images/instagram.png",
    url: "https://instagram.com/patfantmusic"
  },
  "SoundCloud": {
    icon: "images/soundcloud.png",
    url: "https://soundcloud.com/pat-fant"
  },
  "TIDAL": {
    icon: "images/tidal.png",
    url: "https://tidal.com/artist/43832563"
  },
  "YouTube Music": {
    icon: "images/youtube.png",
    url: "https://music.youtube.com/channel/UCjEwwyHDu8meLpwyVOCVmrQ"
  }
};
// Compile the source code
const compiledFunction = pug.compileFile('index.pug');
console.log(compiledFunction({links: links}))
