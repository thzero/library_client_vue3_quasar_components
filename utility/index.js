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

	static selectOptions(options, trans, prefix, funcId, funcName, funcValue) {
		if (!options || !trans || !Array.isArray(options))
			return [];

		prefix = (prefix && prefix !== '') ? prefix + '.' : '';

		const output = options.map(l => {
			let id = l;
			if (funcId)
				id = funcId(l);

			let nameLookup = id;
			if (funcName)
				nameLookup = funcName(l);
			nameLookup = prefix + nameLookup;
			let name = trans(nameLookup);
			if (String.isNullOrEmpty(name) || name === nameLookup)
				name = trans(nameLookup + '.title');

			let value = l;
			if (funcValue)
				value = funcValue(l);

			return {
				id: id,
				name: name,
				value: value
			};
		});
		return output;
	}
}

export default Utility;
