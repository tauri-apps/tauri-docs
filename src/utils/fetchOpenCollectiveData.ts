import {
  IMAGE_DIMENSION,
  type Sponsor,
  type Tier,
} from '@components/sponsors/OpenCollective/_types';

export const PLATINUM_THRESHOLD = 5_000;
export const GOLD_THRESHOLD = 500;
export const SILVER_THRESHOLD = 100;

export async function fetchOpenCollectiveData() {
  const filteredSlugs = ['github-sponsors'];

  // Documentation at https://graphql-docs-v2.opencollective.com/welcome
  const query = `query account {
  collective(slug: "tauri") {
    contributors(limit: 1000) {
      nodes {
        account {
          name
          type
          imageUrl(height: ${IMAGE_DIMENSION})
          slug
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

  const res = await fetch('https://api.opencollective.com/graphql/v2', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw Error(
      `Open Collective query failed: ${res.status} ${res.statusText} \n ${JSON.stringify(await res.json(), null, 2)}, `
    );
  }

  //   TODO: handle currency

  const openCollectiveData = (await res.json()).data;
  return openCollectiveData.collective.contributors.nodes
    .filter(
      (node: any) =>
        !node.account.isIncognito &&
        node.totalAmountContributed.value > 0 &&
        !filteredSlugs.includes(node.account.slug) &&
        node.account.name != 'Guest'
    )
    .sort((a: any, b: any) => b.totalAmountContributed.value - a.totalAmountContributed.value)
    .map((node: any): Sponsor => {
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
      const { slug, name, type, isIncognito, imageUrl } = node.account;

      return {
        name,
        id: name,
        avatarUrl: imageUrl,
        profileUrl: `https://opencollective.com/${slug}`,
        tier,
        type,
      };
    });
}
