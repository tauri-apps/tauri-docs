import { allPages } from '../../utils/content';

// https://github.com/withastro/docs/blob/main/src/pages/0/0.ts
// https://www.github.com/withastro/docs/pull/4266/commits/030073f32d6dfe586c6e1da8d48d6b5485541ba2

export function GET() {
  allPages[0];
  return new Response('');
}
