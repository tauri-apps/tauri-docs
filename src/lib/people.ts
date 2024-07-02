interface Position {
  seat: string;
  since: Date;
  until?: Date;
}

interface Person {
    name: string;
    title: string;
    picture?: string;
    hover?: string;
    positions: Position[],
    socials: {
      [key: string]: string;
    }
}

interface People {
    [key: string]: Person;
}

const people: People = {
    nothingismagick: {
      name: 'Daniel Thompson-Yvetot',
      title: 'Tauri Co-Founder',
      picture: '/authors/nothingismagick.jpeg',
      positions: [{
        seat: "board",
        since: new Date()
      }],
      socials: {}
    },
    lucasfernog: {
      name: 'Lucas Nogueira',
      title: 'Tauri Co-Founder',
      picture: '/authors/lucasfernog.jpeg',
      positions: [{
        seat: "board",
        since: new Date()
      }],
      socials: {}
    },
    beanow: {
      name: 'Robin van Boven',
      title: 'Tauri Board Director',
      picture: '/authors/Beanow.png',
      positions: [{
        seat: "board",
        since: new Date()
      }],
      socials: {}
    },
    jbolda: {
      name: 'Jacob Bolda',
      title: 'Tauri Board Director',
      picture: '/authors/jbolda.jpeg',
      positions: [{
        seat: "board",
        since: new Date()
      }],
      socials: {
        youtube: 'https://www.youtube.com/@JacobBolda'
      }
    },
    lorenzolewis: {
      name: 'Lorenzo Lewis',
      title: 'Tauri Community Lead',
      picture: '/authors/lorenzolewis.png',
      positions: [{
        seat: "community-domain",
        since: new Date('2022-01-01'),
        until: new Date('2024-01-01')
      }],
      socials: {}
    },
    tweidinger: {
      name: 'Tillmann Weidinger',
      title: 'Tauri Security',
      picture: '/authors/tweidinger.png',
      positions: [],
      socials: {}
    },
    amrbashir: {
      name: 'Amr Bashir',
      title: 'Tauri Development',
      picture: '/authors/amrbashir.png',
      positions: [],
      socials: {}
    },
    wusyong: {
      name: 'Wu Yu Wei',
      title: 'Tauri Development Lead',
      picture: '/authors/wusyong.png',
      positions: [{
        seat: "development-domain",
        since: new Date()
      }],
      socials: {}
    },
    chip: {
      name: 'Chip Reed',
      title: 'Tauri Security',
      picture: '/authors/chip.png',
      positions: [],
      socials: {}
    },
    simon: {
      name: "Simon Hyll",
      title: "Tauri Community Lead",
      picture: "https://avatars.githubusercontent.com/u/79983560?v=4",
      hover: '/logo.png',
      positions: [{
        seat: 'community-domain',
        since: new Date()
      }],
      socials: {
        youtube: 'https://www.youtube.com/@hyllsimon',
      }
    },
    fabianlars: {
      name: "Fabian the Faceless",
      title: "Tauri Community Cornerstone, Walls and Ceiling",
      positions: [{
        seat: 'community-domain',
        since: new Date()
      }],
      socials: {}
    }
};

export default people;
