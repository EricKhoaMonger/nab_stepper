import c from 'color'

const PRIME_COLOR = '#2196F3'

export const theme = {
	color: {
		primeColor: PRIME_COLOR,
		lightPrimeColor: c(PRIME_COLOR).alpha(0.38),
		lighterPrimeColor: c(PRIME_COLOR).alpha(0.12),
		white: '#fff',
		lightGrey: '#E5E5E5',
		stepBg: '#00000014',
	},
	font: {
		defaultFontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		number: 14,
		label: 16,
		activeLabel: 18,
	},
	fontWeight: {
		active: 500,
	},
	lineHeight: {
		number: '12px',
		label: '19px',
		activeLabel: '21px',
	},
	shape: {
		rounded: 100
	},
	distance: {
		default: 16,
		medium: 25,
		far: 100,
	},
	size: {
		medium: 20,
	},
	snippets: {
		centeringChildren: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',	
		},
		progressLine: {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			height: 2,
			width: '60%',
			background: PRIME_COLOR,
			zIndex: -1,
		},
	},
}
