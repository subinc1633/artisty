# artisty

![Screen Recording Gif](https://user-images.githubusercontent.com/78716708/141491278-e0246cdb-3176-4f1b-b674-b71c7081f9e8.gif)

## About
Artisty is a fullstack Etsy clone that displays various artworks for sale. Users are able to search for items, either via searchbar or category listing, and place them in their cart for purchase. They may also leave reviews and favorite artworks if desired.

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
### Reviews
Users may leave reviews and set a rating for an item if they are logged in. After a review is created, the item page re-renders and updates the star rating. Initially, I had difficulty having the stars display properly when updating, but compiling the ratings and finding the average made it work.

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

### Randomized splash images
On the splash page, there are images randomized when the page re-renders. To allow for randomization, I used the `_.sampleSize()` method from Lodash to retrieve four items from my database.

```
sampleSize(items, 4).map((item, idx) => (
    <Link to={`/items/${item.id}`} key={idx}>
         <li className='splash-item'>
              <img className='splash-item-image' src={`${item.photoUrl[0].url}`} />
              <p className='splash-item-price-container'>
                  <span className='splash-item-price'>${(item.price * 100 / 100).toFixed(2)}</span>
              </p>
         </li>
    </Link>
))
```

## Future directions
* Implement shops, search bar and shopping cart functionality
* Allow users to favorite items and shops
* Improve accessibility
