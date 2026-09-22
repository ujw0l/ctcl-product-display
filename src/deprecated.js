/* global ctcLiteParams */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const v1 = {
	attributes: {
		name: { type: 'String', default: '' },
		image: { type: 'String', default: '' },
		pageLink: { type: 'String', default: '' },
		price: { type: 'Number', default: 0 },
	},
	save( { attributes } ) {
		return (
			<div { ...useBlockProps.save() }>
				<div
					className="ctcl-product-display"
					style={ {
						marginLeft: 'auto',
						marginRight: 'auto',
						display: 'block',
						border: '1px solid rgba(0,0,0,1)',
					} }
				>
					{ 0 < attributes.image.length && (
						<div style={ { margin: '3px' } }>
							{ /* eslint-disable-next-line jsx-a11y/alt-text */ }
							<img
								style={ { width: '100%', height: 'auto' } }
								src={ attributes.image }
							/>
						</div>
					) }
					{ 0 < attributes.name.length && (
						<div>
							<h5 style={ { textAlign: 'center' } }>
								{ attributes.name }
							</h5>
						</div>
					) }
					{ 0 < attributes.price.length && (
						<div style={ { margin: '3px' } }>
							<span style={ { textAlign: 'center' } }>
								{ __( 'Price ', 'ctcl-product-display' ) +
									'(' +
									ctcLiteParams.currency.toUpperCase() +
									') : ' }
							</span>
							<span style={ { textAlign: 'center' } }>
								{ attributes.price }
							</span>
						</div>
					) }
					{ 0 < attributes.pageLink.length && (
						<div style={ { margin: '3px' } }>
							<a
								style={ { textAlign: 'right' } }
								href={ attributes.pageLink }
							>
								{ __( 'More Info', 'ctcl-product-display' ) }
							</a>
						</div>
					) }
				</div>
			</div>
		);
	},
};

export default [ v1 ];
