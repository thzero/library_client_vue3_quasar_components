class Utility {
	static fullscreen(q) {
		return q.screen.xs;
	}

	static overlayImageWidth() {
		const width = (window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth);
		if (width > 512)
			return '512px';

		return width * 0.75 + 'px';
	}

	static overlayProgressSize() {
		return (window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) * 0.25;
	}
}

export default Utility;
