import Mermaid from './Mermaid'
import React, { useEffect } from 'react'

export default () => {
  const colors = {
    blue: {
      light: '#abd0f9',
      dark: '#1D81EE',
    },
    orange: {
      light: '#fad3a9',
      dark: '#F28918',
    },
  }
  const patterns = [
    {
      name: 'Hermit',
      most: 'TAURI DEFAULT',
      intro:
        'The Hermit recipe is a pattern for ultimate application isolation where all logic is self-contained in the Window and the binary exists merely to bootstrap the Window. There is no communication back to Rust from the Window, there is no localhost server, and the Window has no access to any remote resources. The Hermit is great for interactive Kiosk Mode and standalone HTML based games.',
      ratings: {
        easeOfUse: 5,
        security: 5,
        extensibility: 0,
        performance: 5,
      },
      bestWhen:
        'Best when you want to lock down your app from all external influences.',
      features: ['Locked down interface'],
      pros: ['Quick to make', 'Smallest size'],
      cons: ['No remote resources', 'No access to API'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": false     // do not use a localhost server
},
"whitelist": {
"all": false,       // disable and tree-shake all api functions
}
}
\`\`\`
      `,
      graph: `graph LR
      A==>H
      H==>F
      subgraph WEBVIEW
      F
      end
      subgraph RUST
      A
      end
      A[fa:fa-cog Binary ]
      F[fa:fa-window-maximize Window]
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`,
    },
    {
      name: 'Bridge',
      most: 'MOST POPULAR',
      intro:
        'The Bridge recipe is a secure pattern where messages are passed between brokers via an implicit bridge using the API. It isolates functionality to scope and passes messages instead of functionality.',
      bestWhen:
        'Best when you want two-way communication between Rust and WebView.',
      ratings: {
        easeOfUse: 3,
        security: 4,
        extensibility: 5,
        performance: 4,
      },
      pros: ['Highly configurable', 'Rust skills not required'],
      cons: ['Some WebAPIs unavailable', 'Challenge to implement'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": false               // do not use a localhost server
},
"whitelist": {                  // all whitelist values are default false
"all": false,                 // use this flag to enable all API features
"answer": true,               // enable rust to direct the UI
"event": true,                // enable binding to message
"execute": false,             // enable application execution
"listFiles": false,           // list files in a directory
"open": false,                // open link in a browser
"readBinaryFile": false,      // read binary file from local filesystem
"readTextFile": false,        // read text file from local filesystem
"setTitle": false,            // set the window title
"writeFile": false            // write file to local filesystem
}
}
\`\`\`
      `,
      graph: `graph TD
      H==>F
      subgraph WEBVIEW
      F-.-E
      end
      D-->E
      E-->D
      B-->D
      D-->B
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      B-.-G
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess 2]
      G[Subprocess 1]
      D(( API BRIDGE ))
      E{JS Broker}
      F[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`,
    },
    {
      name: 'Cloudish',
      most: 'MOST SIMPLE',
      intro:
        'The Cloudish recipe is a pattern for maximum flexibility and app performance. It uses a localhost server, which means that your app will technically be available to other processes, like browsers and potentially other devices on the network. All of your assets are baked into the binary, but served as if they were distinct files.',
      ratings: {
        easeOfUse: 5,
        security: 2,
        extensibility: 3,
        performance: 3,
      },
      bestWhen: 'Best when you have never used Rust before.',
      pros: ['No Rust skills necessary', 'Similar to a SPA web-app'],
      cons: ['No access to Rust API', 'Uses a localhost server'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": true                // ship with a localhost server
},
"whitelist": {
"all": false                  // disable entire API
}
}
\`\`\`
      `,
      graph: `graph TD
      H==>F
      H==>D
      D-->F
      F-->D
      subgraph RUST
      A==>H
      end
      subgraph WEBVIEW
      F
      end
      subgraph SERVER
      D
      E-->D
      end
      A[Binary]
      D(( localhost ))
      E[bundled resources]
      F[Window]
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px`,
    },
    {
      name: 'Cloudbridge',
      most: 'MOST COMPLEX',
      intro:
        'The Cloudbridge recipe combines the flexibility of a localhost and the security of the bridge. With so many features, it can be easy to get lost.',
      ratings: {
        easeOfUse: 1,
        security: 2,
        extensibility: 5,
        performance: 3,
      },
      bestWhen:
        'Best when your project is complex and you need all available options.',
      pros: ['All available features', 'Rust skills not required'],
      cons: ['Largest bundle size', 'Hard to separate concerns'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": true                // ship with a localhost server
},
"whitelist": {
"all": true                   // enable entire API
}
}
\`\`\`
      `,
      graph: `graph TD
      H==>F2
      H==>D2
      D2-->F2
      F2-->D2
      B-->D
      D-->B
      E2-->D
      D-->E2
      subgraph WEBVIEW
      F2
      E2
      end
      subgraph SERVER
      D2
      E-->D2
      end
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess]
      D(( API BRIDGE ))
      E{JS Broker}
      D2(( localhost ))
      E[bundled resources]
      E2{JS Broker}
      F2[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px
      `,
    },
    {
      name: 'Kamikaze',
      most: 'BEST IN CLASS',
      intro:
        'The Kamikaze recipe is a minimal usage of the Bridge pattern, which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback.',
      ratings: {
        easeOfUse: 2,
        security: 6,
        extensibility: 4,
        performance: 5,
      },
      bestWhen: 'Best when you want Rust to drive the Webview.',
      features: ['Locked down interface.'],
      pros: ['Highest security rating', 'Elegant and powerful'],
      cons: ['Rust skills required', 'No remote resources'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": false               // do not use a localhost server
},
"whitelist": {                  // all API endpoints are default false
"event": true,                // Use the EVENT API for injections
}
}
\`\`\`
      `,
      graph: `graph TD
      H==>F
      G-.->B
      B-->G
      subgraph WEBVIEW
      G-->F
      end
      subgraph RUST
      A-->B
      A==>H
      end
      A[Binary]
      B[API:Event]
      F[Window]
      G((Promise Closure))
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`,
    },
    {
      name: 'Multiwin',
      most: 'COMING SOON ',
      intro:
        'The Multiwin recipe will allow you to have multiple windows, some of which may be GL based.\n\nPlease note: This Pattern is not yet available.',
      ratings: {
        easeOfUse: 1,
        security: 5,
        extensibility: 4,
        performance: 3,
      },
      bestWhen: 'Best when you need more than one window.',
      pros: ['Access to GL context', 'Separation of concerns'],
      cons: ['Extremely complex', 'Not yet available'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": false               // do not use a localhost server
},
"whitelist": {                  // all API endpoints are default false
"event": true,                // Use the EVENT API for injections
}
}
\`\`\`
      `,
      graph: `graph LR
      A==>H
      H==>F
      H==>G
      subgraph WEBVIEW
      F
      end
      subgraph GLUTIN
      G
      end
      subgraph RUST
      A
      end
      A[Binary]
      F[Window]
      G[GL Window]
      H{Bootstrap}
      style GLUTIN stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`,
    },
    {
      name: 'GLUI',
      most: 'EXPERMIMENTAL',
      intro:
        "The GLUI is a research pattern that we will use internally to test approaches using a GLUTIN window. We're not sure yet if it will make the final cut as a bona fide alternative to Webview, although early tests with transparent and multiwindow are exciting.\n\nPlease note: This Pattern is not available.",
      ratings: {
        easeOfUse: 0,
        security: 0,
        extensibility: 0,
        performance: 5,
      },
      bestWhen: 'Best when you want to help Tauri evolve.',
      pros: ['Framebuffer FTW', 'Window events rigged'],
      cons: ['In development', 'Broken on your machine'],
      configMD: `
\`\`\`json
"tauri": {
"embeddedServer": {
"active": false               // do not use a localhost server
},
"whitelist": {                  // all API endpoints are default false
"all": false,                 // disable the api
},
"window": {                     // not yet normative
"glutin": true,
"webview": false
}
}
\`\`\`
      `,
      graph: `graph TD
      A==>H
      H==>G
      A-->D
      D-->G
      subgraph GLUTIN
      G
      end
      subgraph RUST
      A
      end
      A[Binary]
      D(Framebuffer)
      G[GL Window]
      H{Bootstrap}
      style GLUTIN stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px`,
    },
  ]

  const graphs = patterns.map((pattern) => (
    <Mermaid key={pattern.name} chart={pattern.graph} />
  ))

  return <div>{graphs}</div>
}
