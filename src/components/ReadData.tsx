import CardData from './CardData'
import etsy from '../data/etsy.json'

const ReadData = () => {
  return (
    <div className='item-list'>
        {etsy.map((item, index) => <CardData key={index} 
        listing_id={item.listing_id}
        state={item.state}
        user_id={item.user_id} //?
        category_id={item.category_id} //?
        title={item.title} //?
        description={item.description} //?
        creation_tsz={item.creation_tsz} //?
        ending_tsz={item.ending_tsz} //?
        original_creation_tsz={item.original_creation_tsz} //?
        last_modified_tsz={item.last_modified_tsz} //?
        price={item.price} //?
        currency_code={item.currency_code} //?
        quantity={item.quantity} //?
        sku={item.sku}
        tags={item.tags} //?
        category_path={item.category_path} //?
        category_path_ids={item.category_path_ids} //?
        materials={item.materials} //?
        //shop_section_id={item.shop_section_id} //?
        //featured_rank={item.featured_rank} //?
        state_tsz={item.state_tsz} //?
        url={item.url} //?
        views={item.views} //?
        num_favorers={item.num_favorers} //?
        //shipping_template_id={item.shipping_template_id} //?
        //processing_min={item.processing_min} //?
        //processing_max={item.processing_max} //?
        who_made={item.who_made} //?
        is_supply={item.is_supply} //?
        when_made={item.when_made} //?
        item_weight={item.item_weight}
        item_weight_unit={item.item_weight_unit} //?
        item_length={item.item_length}
        item_width={item.item_width}
        item_height={item.item_height}
        item_dimensions_unit={item.item_dimensions_unit} //?
        is_private={item.is_private} //?
        //recipient={item.recipient} //?
        occasion={item.occasion}
        //style={item.style} //?
        non_taxable={item.non_taxable} //?
        is_customizable={item.is_customizable} //?
        is_digital={item.is_digital} //?
        file_data={item.file_data} //?
        should_auto_renew={item.should_auto_renew} //?
        language={item.language} //?
        has_variations={item.has_variations} //?
        taxonomy_id={item.taxonomy_id} //?
        taxonomy_path={item.taxonomy_path} //?
        used_manufacturer={item.used_manufacturer} //?
        MainImage={item.MainImage} //?
        error_messages={item.error_messages} //?
         />)}
    </div>
  )
}

export default ReadData