# artisty

![Screen Shot 2021-12-13 at 4 54 58 PM](https://user-images.githubusercontent.com/78716708/145895084-5fe1de6d-28f8-4483-bf57-9a7795735327.png)

## About
Artisty is a full stack Etsy clone that displays various artworks for sale. Users are able to search for items, either via search bar or category listing, and place them in their cart for purchase.

[Live Demo](https://artistyy.herokuapp.com/#/)

## Technologies Used
* Ruby on Rails
* HTML
* SCSS
* JavaScript
* React
* Redux
* AWS
* PostgreSQL

## Features
### Search
Users may search for artworks through the search bar and find the item they wish to look up. The use of URLSearchParams allowed for faster procurement of the search queries.

![Untitled](https://user-images.githubusercontent.com/78716708/145897950-6417e7d1-cc62-4d2c-98e0-db04dcba895a.gif)

```
const SearchPage = () => {
    const items = useSelector(state => state.entities.items);

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let query = params.get('q').replace('+', ' ').toLowerCase();
    
    ...
    
    return (
        ...
        <div className="item-list-container">
            <h1 className="search-query">You searched for "{query}"</h1>
            <ul className="category-show-items">
                {
                    Object.values(items).map((item, idx) => {
                        if (item.title.toLowerCase().includes(query)) return <CategoryShowItem key={idx} item={item} />
                    })
                }
            </ul>
        </div>
    );
}
```

### Reviews
Users may leave reviews and set a rating for an item if they are logged in. After a review is created, the item page re-renders and updates the star rating.

![reviews](https://user-images.githubusercontent.com/78716708/145904310-cb6ebbb7-f880-475f-bfb9-df8f7ed9b86b.gif)

```
const ratings = []
item.reviews ? Object.values(item.reviews).forEach(review => {
     ratings.push(review.rating)
}) : null;
const avgRating = item && ratings.length > 0 ? Math.round(ratings.reduce((acc, el) => acc + el, 0) / ratings.length) : 0;

return (
     <div className='review-index'>
         <h3 className='review-total-count'>{reviewIndexItems.length} Reviews</h3>
              <span className='review-rating'>
                    {
                        [...Array(5)].map((star, idx) => (
                            idx + 1 <= avgRating ? <IoStar key={idx} /> : <IoStarOutline key={idx} />)
                        )
                    }
                </span><br />
...
```

### Cart
On the item's show page, users can add the item to their cart with the number of items. Users may delete the item from their cart and update the quantity. Upon checkout, the cart refreshes and users may continue shopping if desired.

![cart](https://user-images.githubusercontent.com/78716708/145905738-da06d873-4899-4f03-abc9-8d972ef15fd7.gif)

## Future directions
* Allow users to favorite items and shops
* Implement filter function for categories
* Add image carousel functionality
