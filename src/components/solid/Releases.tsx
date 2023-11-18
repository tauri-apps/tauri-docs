import { createSignal, For, createEffect, Show, onMount } from 'solid-js';
import { SolidMarkdown } from 'solid-markdown';
import './Releases.css';

function Release(props: { url: string }) {
	type ReleaseNotes = { version: string; notes: string };
	const [releaseNotes, setReleaseNotes] = createSignal<ReleaseNotes[]>();
	const [selectedNotes, setSelectedNotes] = createSignal<ReleaseNotes>();

	createEffect(async () => {
		const response = await fetch(props.url);
		const responseText: string = await response.text();
		const notes = responseText
			.split('## \\[')
			.filter((item) => !item.includes('# Changelog'))
			.map((section) => {
				const [version, ...c] = section.split('\n');
				const contents = c.join('\n');
				return {
					version: version.replace('\\[', '').replace(']', ''),
					notes: contents,
				};
			})
			.filter(({ version }) => !version.includes('Not Published'));

		setReleaseNotes(notes);
		setSelectedNotes(notes[0]);
	});

	return (
		<div class="m-0 width-full">
			<Show
				when={releaseNotes()}
				fallback={
					<div class="spinner-container">
						<span class="lds-dual-ring"></span>
					</div>
				}
			>
				<div class="version-selector-container">
					<select
						class="version-selector"
						onChange={(e) =>
							setSelectedNotes(releaseNotes()!.find((n) => n.version === e.target.value))
						}
					>
						<For each={releaseNotes()}>{(n) => <option value={n.version}>{n.version}</option>}</For>
					</select>
				</div>
				<Show when={selectedNotes()}>
					<div>
						<SolidMarkdown children={selectedNotes()!.notes} />
					</div>
				</Show>
			</Show>
		</div>
	);
}

export default function Releases() {
	const packages = [
		{
			name: 'tauri',
			url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/core/tauri/CHANGELOG.md',
		},
		{
			name: '@tauri-apps/api',
			url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/api/CHANGELOG.md',
		},
		{
			name: 'tauri-cli',
			url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/CHANGELOG.md',
		},
		{
			name: '@tauri-apps/cli',
			url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/node/CHANGELOG.md',
		},
		{
			name: 'tauri-bundler',
			url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/bundler/CHANGELOG.md',
		},
	];

	const [selctedPackage, setSelectedPackage] = createSignal(packages[0]);

	return (
		<div class="flex gap-2">
			<aside class="flex col">
				<For each={packages}>
					{(p) => (
						<button
							classList={{ selected: p.name === selctedPackage().name }}
							onClick={() => setSelectedPackage(p)}
						>
							{p.name}
						</button>
					)}
				</For>
			</aside>

			<span class="vertical-sep"></span>

			<Release url={selctedPackage().url} />
		</div>
	);
}
