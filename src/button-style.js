// Choose readable text for the selected six-digit palette color.
export default function buttonStyle( color ) {
	if ( ! /^#[0-9a-f]{6}$/i.test( color || '' ) ) {
		return undefined;
	}
	const channels = color
		.slice( 1 )
		.match( /../g )
		.map( ( channel ) => {
			const value = parseInt( channel, 16 ) / 255;
			return value <= 0.04045
				? value / 12.92
				: ( ( value + 0.055 ) / 1.055 ) ** 2.4;
		} );
	const luminance =
		channels[ 0 ] * 0.2126 +
		channels[ 1 ] * 0.7152 +
		channels[ 2 ] * 0.0722;
	return {
		'--ctcl-accent': color,
		'--ctcl-button-text': luminance > 0.179 ? '#000000' : '#ffffff',
	};
}
