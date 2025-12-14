import fs from 'node:fs';

export async function q(query: string, url: string, name: string, headers?: any) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (!res.ok) {
    throw Error(
      `${name} query failed: ${res.status} ${res.statusText} \n ${JSON.stringify(await res.json(), null, 2)}, `
    );
  }

  const data = (await res.json()).data;
  return data;
}

export async function saveToFile(filePath: string, fetcher: any) {
  try {
    const data = await fetcher();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Failed to fetch or write  ${filePath}:`, error);
  }
}

export async function GITHUB_TOKEN(): Promise<string> {
  if (process.env.NODE_ENV !== 'production') {
    await import('dotenv/config');
  }
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is not set');
  }
  return token;
}
