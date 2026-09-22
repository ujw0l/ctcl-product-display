/* global ctcLiteParams */

import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import buttonStyle from './button-style';

const getCurrency = () =>
	typeof ctcLiteParams !== 'undefined' && ctcLiteParams.currency
		? ctcLiteParams.currency.toUpperCase()
		: 'USD';

export default function Edit( { attributes, setAttributes } ) {
	const {
		name = '',
		image = '',
		pageLink = '',
		price = '',
		description = '',
		badge = '',
		buttonColor = '',
	} = attributes;
	const hasProduct = name || image || price || description;

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Button color', 'ctcl-product-display' ) }
					colorSettings={ [
						{
							value: buttonColor,
							onChange: ( value ) =>
								setAttributes( { buttonColor: value || '' } ),
							label: __(
								'Button background',
								'ctcl-product-display'
							),
						},
					] }
				/>
				<PanelBody
					title={ __( 'Product image', 'ctcl-product-display' ) }
					initialOpen
				>
					{ image && (
						<img
							src={ image }
							alt={ name }
							style={ {
								width: '100%',
								height: 'auto',
								marginBottom: '12px',
							} }
						/>
					) }
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							onSelect={ ( media ) =>
								setAttributes( { image: media.url } )
							}
							render={ ( { open } ) => (
								<Button variant="secondary" onClick={ open }>
									{ image
										? __(
												'Replace product image',
												'ctcl-product-display'
										  )
										: __(
												'Upload or select product image',
												'ctcl-product-display'
										  ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
					<TextControl
						label={ __( 'Image URL', 'ctcl-product-display' ) }
						help={ __(
							'Choose an image above or paste its direct URL here.',
							'ctcl-product-display'
						) }
						type="url"
						value={ image }
						onChange={ ( value ) =>
							setAttributes( { image: value } )
						}
					/>
					{ image && (
						<Button
							variant="tertiary"
							isDestructive
							onClick={ () => setAttributes( { image: '' } ) }
						>
							{ __(
								'Remove product image',
								'ctcl-product-display'
							) }
						</Button>
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Product details', 'ctcl-product-display' ) }
					initialOpen
				>
					<TextControl
						label={ __( 'Product name', 'ctcl-product-display' ) }
						value={ name }
						onChange={ ( value ) =>
							setAttributes( { name: value } )
						}
					/>
					<TextareaControl
						label={ __(
							'Short description',
							'ctcl-product-display'
						) }
						help={ __(
							'Keep it concise—one or two lines works best.',
							'ctcl-product-display'
						) }
						value={ description }
						onChange={ ( value ) =>
							setAttributes( { description: value } )
						}
					/>
					<TextControl
						label={ __( 'Price', 'ctcl-product-display' ) }
						type="number"
						min="0"
						step="0.01"
						value={ price }
						onChange={ ( value ) =>
							setAttributes( { price: value } )
						}
					/>
					<TextControl
						label={ __( 'Badge', 'ctcl-product-display' ) }
						help={ __(
							'Optional, for example “New” or “Popular”.',
							'ctcl-product-display'
						) }
						value={ badge }
						onChange={ ( value ) =>
							setAttributes( { badge: value } )
						}
					/>
					<TextControl
						label={ __( 'Product URL', 'ctcl-product-display' ) }
						type="url"
						value={ pageLink }
						onChange={ ( value ) =>
							setAttributes( { pageLink: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{ ...useBlockProps( {
					className: 'ctcl-product-editor',
					style: buttonStyle( buttonColor ),
				} ) }
			>
				<div className="ctcl-product-editor__header">
					<div>
						<span>
							{ __(
								'Related product card',
								'ctcl-product-display'
							) }
						</span>
						<p>
							{ __(
								'Edit product details in the sidebar.',
								'ctcl-product-display'
							) }
						</p>
					</div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { image: media.url } )
							}
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button variant="secondary" onClick={ open }>
									{ image
										? __(
												'Replace image',
												'ctcl-product-display'
										  )
										: __(
												'Add image',
												'ctcl-product-display'
										  ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				</div>
				{ ! hasProduct && (
					<div className="ctcl-product-editor__empty">
						<strong>
							{ __(
								'Build a related product card',
								'ctcl-product-display'
							) }
						</strong>
						<p>
							{ __(
								'Add an image, then use the sidebar to enter product details.',
								'ctcl-product-display'
							) }
						</p>
					</div>
				) }
				<div className="ctcl-product-display">
					<div className="ctcl-product-display__media">
						{ image ? (
							<img src={ image } alt="" />
						) : (
							<div
								className="ctcl-product-display__placeholder"
								aria-hidden="true"
							/>
						) }
						{ badge && (
							<span className="ctcl-product-display__badge">
								{ badge }
							</span>
						) }
					</div>
					<div className="ctcl-product-display__content">
						<h3 className="ctcl-product-display__title">
							{ name ||
								__( 'Product name', 'ctcl-product-display' ) }
						</h3>
						{ description && (
							<p className="ctcl-product-display__description">
								{ description }
							</p>
						) }
						<div className="ctcl-product-display__footer">
							<div className="ctcl-product-display__price">
								<span>
									{ __( 'Price', 'ctcl-product-display' ) }
								</span>
								<strong>
									{ price || '0.00' }{ ' ' }
									<small>{ getCurrency() }</small>
								</strong>
							</div>
							<span className="ctcl-product-display__link">
								{ __( 'View product', 'ctcl-product-display' ) }{ ' ' }
								<span aria-hidden="true">→</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
