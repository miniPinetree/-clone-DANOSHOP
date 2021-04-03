import React from "react";
import styled from "styled-components";
const PromotionSticker=(props)=>{
    return(
        <React.Fragment>
            <Sticker></Sticker>
        </React.Fragment>
    );
}
const Sticker = styled.div`
background-image: url("data:image/svg+xml,%3Cpath fill='%23FFF' fill-rule='nonzero' d='M26.36 72.064c2.76 0 5.016-.672 6.768-2.016 1.824-1.416 2.736-3.336 2.736-5.76 0-2.376-.66-4.188-1.98-5.436-1.104-1.008-2.736-1.668-4.896-1.98l-3.024-.432c-1.008-.144-1.8-.48-2.376-1.008-.504-.48-.756-1.092-.756-1.836 0-2.16 1.32-3.24 3.96-3.24 1.032 0 1.92.096 2.664.288 1.008.288 1.872.78 2.592 1.476l3.168-3.132C33.152 46.996 30.392 46 26.936 46c-2.736 0-4.92.72-6.552 2.16-1.584 1.416-2.376 3.288-2.376 5.616 0 2.136.612 3.816 1.836 5.04 1.128 1.104 2.784 1.812 4.968 2.124l3.096.432c1.032.168 1.788.468 2.268.9.528.504.792 1.224.792 2.16 0 2.112-1.512 3.168-4.536 3.168-1.272 0-2.4-.156-3.384-.468-1.104-.36-2.04-.924-2.808-1.692L17 68.68c1.224 1.224 2.616 2.112 4.176 2.664 1.416.48 3.144.72 5.184.72zm16.282-.216l1.548-4.536h9.108l1.512 4.536h5.22l-9.36-25.632h-3.924l-9.324 25.632h5.22zm9.324-8.748h-6.372l3.24-9.324 3.132 9.324zm27.514 8.748v-4.464H67.852V46.216h-5.004v25.632H79.48zm20.602 0v-4.464h-11.88v-6.228h10.116v-4.464H88.202V50.68h11.88v-4.464H83.198v25.632h16.884z'%3E%3C/path%3E");
`;
export default PromotionSticker;