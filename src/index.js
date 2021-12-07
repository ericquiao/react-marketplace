import React from 'react';
import ReactDOM from 'react-dom';
import {ListingItem} from "./ListingItem"


ReactDOM.render(
<div className = "flex flex-col gap-3 p-3">

<ListingItem 
    imgsrc="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=543&h=384&q=80"
    currency = "RM" 
    price = "99" 
    brand = "Nike Air 2021" 
    caption = "So light it feels like walking in th air."
    availability = {<div className="text-sm text-gray-500">5 piece available</div>}
/>

<ListingItem 
    imgsrc="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
    currency = "RM" 
    price = "10" 
    brand = "Classic Quartz Clock" 
    caption = "Inexpensive. Best as birthday gift for your enemy."
    availability = {<div className="text-sm text-gray-500">143 piece available</div>}
/>

<ListingItem 
    imgsrc="https://images.unsplash.com/photo-1571689936114-b16146c9570a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
    currency = "RM"     
    price = "50" 
    brand = "Handsome Handcarry Bag" 
    caption = "Elegant. Versatile. Influencer-friendly."
    availability = {<span 
                        className="
                            inline-flex
                            items-center
                            px-2.5
                            py-0.5
                            rounded-full
                            text-xs
                            font-medium
                            bg-red-100
                            text-red-800">
                        Only One
                    </span>}
/>

<ListingItem 
    imgsrc="https://images.unsplash.com/photo-1596460107916-430662021049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
    currency = "RM" 
    price = "50" 
    brand = "Authentic Seiko Watch" 
    caption = "The Seiko Prospex challenges every limit, with a collection of timepieces for sport lovers and adventure seekers"
    availability = 
        {<span 
            className="
                inline-flex
                items-center
                px-2.5
                py-0.5
                rounded-full
                text-xs
                font-medium
                bg-red-100
                text-red-800">
                Only One
        </span>}
/>

</div>,
document.querySelector("#root"));