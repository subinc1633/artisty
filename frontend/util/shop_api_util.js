export const fetchShop = shopId => (
    $.ajax({
        method: 'GET',
        url: `api/shops/${shopId}`
    })
);