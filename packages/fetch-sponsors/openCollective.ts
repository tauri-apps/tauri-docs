import {
  GOLD_THRESHOLD,
  PLATINUM_THRESHOLD,
  SILVER_THRESHOLD,
  OC_IMAGE_DIMENSION,
  OPEN_COLLECTIVE_FILE,
} from './config.ts';
import { type OpenCollectiveSponsor, type Tier } from './types.ts';
import { saveToFile, q } from './utils.ts';

async function fetchData() {
  const filteredSlugs = ['github-sponsors'];

  // Documentation at https://graphql-docs-v2.opencollective.com/welcome
  const query = `query account {
    collective(slug: "tauri") {
      contributors(limit: 1000) {
        nodes {
          account {
            name
            type
            imageUrl(height: ${OC_IMAGE_DIMENSION}, format: jpg)
            slug
            socialLinks {
              type
              url
            }
            isIncognito
          }
          totalAmountContributed {
            value
            currency
            }
        }
      }
    }
  }`;

  const data = await q(query, 'https://api.opencollective.com/graphql/v2', 'Open Collective');

  //   TODO: handle currency
  return data.collective.contributors.nodes
    .filter(
      (node: any) =>
        !node.account.isIncognito &&
        node.totalAmountContributed.value > 0 &&
        !filteredSlugs.includes(node.account.slug) &&
        node.account.name != 'Guest'
    )
    .sort((a: any, b: any) => b.totalAmountContributed.value - a.totalAmountContributed.value)
    .map((node: any): OpenCollectiveSponsor => {
      let tier: Tier;
      let amount = node.totalAmountContributed.value;
      if (amount >= PLATINUM_THRESHOLD) {
        tier = 'platinum';
      } else if (amount >= GOLD_THRESHOLD) {
        tier = 'gold';
      } else if (amount >= SILVER_THRESHOLD) {
        tier = 'silver';
      } else {
        tier = 'bronze';
      }
      const { slug, name, type, isIncognito, imageUrl, socialLinks } = node.account;

      const socialLinksMap = socialLinks?.reduce(
        (acc: Record<string, string>, link: { type: string; url: string }) => {
          acc[link.type.toLowerCase()] = link.url;
          return acc;
        },
        {}
      );

      return {
        name,
        id: name,
        avatarUrl: imageUrl,
        profileUrl: `https://opencollective.com/${slug}`,
        socialLinks: socialLinksMap,
        tier,
        type,
      };
    });
}

export async function fetchOpenCollectiveData() {
  await saveToFile(OPEN_COLLECTIVE_FILE, fetchData);
}
