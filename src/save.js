/* global ctcLiteParams */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const getCurrency = () =>
	typeof ctcLiteParams !== 'undefined' && ctcLiteParams.currency
		? ctcLiteParams.currency.toUpperCase()
		: 'USD';

export default function save( { attributes } ) {
	const {
		name = '',
		image = '',
		pageLink = '',
		price = '',
		description = '',
		badge = '',
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<article className="ctcl-product-display">
				<div className="ctcl-product-display__media">
					{ image && <img src={ image } alt={ name } /> }
					{ badge && (
						<span className="ctcl-product-display__badge">
							{ badge }
						</span>
					) }
				</div>
				<div className="ctcl-product-display__content">
					{ name && (
						<h3 className="ctcl-product-display__title">
							{ name }
						</h3>
					) }
					{ description && (
						<p className="ctcl-product-display__description">
							{ description }
						</p>
					) }
					<div className="ctcl-product-display__footer">
						{ price !== '' && (
							<div className="ctcl-product-display__price">
								<span>
									{ __( 'Price', 'ctcl-product-display' ) }
								</span>
								<strong>
									{ price } <small>{ getCurrency() }</small>
								</strong>
							</div>
						) }
						{ pageLink && (
							<a
								className="ctcl-product-display__link"
								href={ pageLink }
							>
								{ __( 'View product', 'ctcl-product-display' ) }{ ' ' }
								<span aria-hidden="true">→</span>
							</a>
						) }
					</div>
				</div>
			</article>
		</div>
	);
}
