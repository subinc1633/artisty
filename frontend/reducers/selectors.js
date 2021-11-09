export const allReviews = ({ reviews }) => reviews ? Object.keys(reviews).map(id => reviews[id]) : null;

export const itemsByCategoryId = ({ items }, categoryId) => {
    const itemsByCategoryId = [];
    Object.keys(items).forEach(itemId => {
        const item = items[itemId];
        if (items[itemId].categoryId === categoryId) itemsByCategoryId.push(item);
    });
    return itemsByCategoryId;
};