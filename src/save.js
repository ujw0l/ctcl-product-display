/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
	<div className='ctcl-product-display' style={{marginLeft:'auto',marginRight:"auto",display:'block',border:'1px solid rgba(0,0,0,1)'}} >

{0< attributes.image.length && <div style={{margin:'3px'}}> <img style={{width:'100%',height:'auto'}} src={attributes.image}/> </div>}
{0< attributes.name.length && <div > <h5 style={{textAlign:'center'}}>{ attributes.name}</h5> </div>}	
{0< attributes.price.length && <div style={{margin:'3px'}}> <span style={{textAlign:'center'}}>{__('Price ','ctcl-product-display')+'('+ctcLiteParams.currency.toUpperCase()+') : '}</span><span style={{textAlign:'center'}}>{attributes.price}</span> </div>}		
{0< attributes.pageLink.length && <div style={{margin:'3px'}} > <a style={{textAlign:'right'}} href={attributes.pageLink}>{__('More Info','ctcl-product-display')}</a> </div>}	
</div>

</div>
	);
}
