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

// TODO: override on prod
export async function checkAndWriteData(filePath: string, fetcher: any) {
  try {
    let data = [];
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      data = await fetcher();
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
    return data;
  } catch (error) {
    console.error(`Failed to fetch or write  ${filePath}:`, error);
  }
}
