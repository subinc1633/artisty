export const fetchShops = () => (
    $.ajax({
        method: 'GET',
        url: 'api/shops'
    })
)

export const fetchShop = shopId => (
    $.ajax({
        method: 'GET',
        url: `api/shops/${shopId}`
    })
);