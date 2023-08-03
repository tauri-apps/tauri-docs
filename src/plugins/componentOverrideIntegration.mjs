import fs from 'fs';
import path from 'path';

const LOCAL_COMPONENT_DIR = 'src/components';
const components = ['PrevNextLinks'];

export default function overrideIntegration() {
  return {
    name: 'overrides',
    hooks: {
      'astro:config:setup'({ updateConfig }) {
        updateConfig({
          vite: {
            plugins: [
              {
                enforce: 'pre',
                name: 'override',
                async resolveId(source, importer) {
                  for (const component of components) {
                    if (
                      source.endsWith(`${component}.astro`) &&
                      !source.includes(LOCAL_COMPONENT_DIR) &&
                      !source.includes('node_modules')
                    ) {
                      if (importer.includes(LOCAL_COMPONENT_DIR)) {
                        return path.resolve(
                          `./node_modules/@astrojs/starlight/components/${component}.astro`
                        );
                      } else {
                        return path.resolve(
                          `./${LOCAL_COMPONENT_DIR}/_${component}.astro`
                        );
                      }
                    }
                  }
                },
              },
            ],
          },
        });
      },
    },
  };
}
