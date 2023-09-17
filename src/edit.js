import { PanelBody, Button,TextControl  } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps ,MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes,setAttributes}) {




	return (
		<div { ...useBlockProps() }>
		<div style={{height:'280px'}}>

<div>
				<TextControl
					label={__("Product Name","ctcl-product-display")}
					value={ attributes.name }
					onChange={ value  => setAttributes({name:value}) }
				/>
</div>
<div>
				<TextControl
					label={__("Price","ctcl-product-display")}
					value={ attributes.price}
					type='number'
					onChange={ value => setAttributes({price:value}) }
				/>

</div>
<div>

				<TextControl
					label={__("Product URL","ctcl-product-display")}
					value={ attributes.pageLink }
					onChange={ value  => setAttributes({pageLink :value}) }
				/>				
</div>



			

			<div style={{float:"left",marginBottom:'30px',display:'block'}}>
			<MediaUploadCheck>
					<MediaUpload
						onSelect={media => setAttributes({ image: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button style={{ border: '1px solid rgba(0,0,0,1)', float:"right",margin:"10px" }} onClick={open}>{ 0< attributes.image.length ? __('Change Image','ctcl-product-display') :__('Select Image', 'ctcl-product-display')}</Button>
						)}
					/>
				</MediaUploadCheck>
</div>

			</div>

			<div className='ctcl-product-display' style={{marginLeft:'auto',marginRight:"auto",display:'block',border:'1px solid rgba(0,0,0,1)'}} >

				{0< attributes.image.length && <div style={{margin:'3px'}}> <img style={{width:'100%',height:'auto'}} src={attributes.image}/> </div>}
				{0< attributes.name.length && <div > <h5 style={{textAlign:'center'}}>{ attributes.name}</h5> </div>}	
				{0< attributes.price.length && <div style={{margin:'3px'}}> <span style={{textAlign:'center'}}>{__('Price ','ctcl-product-display')+'('+ctcLiteParams.currency.toUpperCase()+') : '}</span><span style={{textAlign:'center'}}>{attributes.price}</span> </div>}		
				{0< attributes.pageLink.length && <div style={{margin:'3px'}} > <a style={{textAlign:'right'}} href={attributes.pageLink}>{__('More Info','ctcl-product-display')}</a> </div>}	
			</div>

		</div>
	);
}
