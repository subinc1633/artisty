export const fetchAllShops = () => (
    $.ajax({
        method: 'GET',
        url: 'api/shops'
    })
);