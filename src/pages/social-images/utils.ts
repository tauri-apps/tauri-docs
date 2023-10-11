export function breakText(str: string, maxLines: number, maxLineLen: number) {
	const segmenterTitle = new Intl.Segmenter('en-US', { granularity: 'word' });
	const segments = segmenterTitle.segment(str);

	let linesOut = [''];
	let lineNo = 0;
	let offsetInLine = 0;
	for (const word of Array.from(segments)) {
		if (offsetInLine + word.segment.length >= maxLineLen) {
			lineNo++;
			offsetInLine = 0;
			linesOut.push('');
		}

		if (lineNo >= maxLines) {
			return linesOut.slice(0, maxLines);
		}

		linesOut[lineNo] += word.segment;
		offsetInLine += word.segment.length;
	}
	return linesOut;
}
