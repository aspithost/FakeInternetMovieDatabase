# Fake Internet Movie Database (FIMDb)
Welcome to FIMDb! Please don't upload this to the web, as Amazon may just sue me for copyright infringement ;)

## How To Run This Project
Running this project in development mode should not be too much of a hassle. Once copy-pasted to your local machine that has Node.js installed, please install the dependencies:

```
npm install
```
And then run the app with Vite's development server:
```
npm run dev
```
If you instead want to bundle the application and run it in production mode, you'll need to take an extra step or two:
```
npm run build
npm run production

```

## Main Design Considerations
I wanted to design a website with a dark theme where the feature images really popped out, similar to the most successful ones (IMDb, Netflix) in the movies/series genre.

On the homepage, I show series in categories that I deemed most relevant. I filter by genre, sort by rating, select the top 20, and randomize their position to prevent Breaking Bad from taking first place in 4 straight carousels. 


## Architecture
A skeleton rendition of my FIMDb application. Text in round brackets refers to composables used in the components/views. I pass all relevant data from parents to children using props.

```
| App
|
|--- NavBar.vue (useDebouncer, useEventListener)
|   | 
|   |--- Search.vue (useDebouncer, useFetch)
|   
|--- Router-view (Homepage or Show)  
|   |
|   |--- Homepage.vue (useFetch, useFilterShows)
|   |   |
|   |   |--- ItemList.vue
|   |       |
|   |       |--- ItemCard.vue
|   |           |
|   |           |--- ShowRating.vue
|   |
|   |--- Show.vue (useFetch)
|       |
|       |--- ShowRating.vue
|       |
|       |--- ImagePortrait.vue
|       |
|       |--- Episodes.vue
|       |   |
|       |   |--- ShowRating.vue
|       |
|       |--- Cast.vue
|           |
|           |--- ImagePortrait.vue
|
|--- Footer.vue
```

### Reusability
I tried to abstract away as much boilerplate to components/composables as I could. In several cases, I created components for code readability only, as I use and import some of them only once (i.e. ItemList.vue, ItemCard.vue, Episodes.vue, Cast.vue).

### Limited Fetch Calls
I tried to keep the number of fetch calls to the bare minimum, and rely on my front-end JavaScript to make the data presentable. On the Show.vue page, for example, I use one fetch call to load all relevant data (show info, cast, crew, episodes, image URL's) to prevent excessive and unnecessary API calls. For the search bar, I use a debouncer composable to only query the API after a user stops typing for a millisecond or two.  

Having said all that...

### Comedic Relief: The Worst Shows Of All Time
DISCLAIMER: This is VERY bad coding practice, I only included it for laughs.
Rather than just list popular and relevant shows, I thought It'd be funny to include a "Worst Shows Of All Time" section, based on user reviews. As I cannot/did not find out how to query the API by user review ratings, it means my app loops through ALL shows (~250 API calls, 60k+ shows). Clearly, I would never do such a thing in any real app, but I included it for comedic relief nonetheless. 

<br>

## Libraries & Frameworks
As the assignment instructed, I tried to keep my libraries and frameworks to a minimum. I did not use any JavaScript quality-of-life utilities/libraries like Lodash, and instead wrote all the logic myself.

### Vue 3 & Composition API
For this assignment I chose to use Vue.js as my front-end framework. I have worked with Vue extensively and, seeing that you are hiring Vue developers, it seemed like a logical choice. I use Vue 3 and the Composition API, as I like working with composables and find the Composition API's logic very intuitive.

### Vue-Router
I use Vue-Router for front-end routing. I have not tried my hand at routing in just plain JavaScript, this was mostly a quality-of-life and time consideration.

### Vite.js
I use Vite.js as my development server as well as its build tool, which uses Rollup. I have not changed any Vite/Rollup presets for this assignment. I also use two Babel-like plugins for backward compatability with older browsers. 

### TailwindCSS, PostCSS, Autoprefixer
I use TailwindCSS as my CSS library. Considered a low-level framework, there aren't many fancy presets that abstract away the actual CSS logic: it mostly allows me to just write inline utility classes. It's also the CSS framework I'm mostly comfortable at the moment, so it was primarily a quality-of life- & time consideration. It also helps that Tailwind automatically removes all unused CSS for production builds.
Using it as a PostCSS plugin makes it easy to integrate with Vite.js and its Rollup build tool.


<br>

## Unfinished/Left-out (time-constraints & prioritization)

### Testing
As I discussed with Surya in our meeting last week, I have not yet used testing frameworks in my coding process. Although I have started toying around with Jest in some test folders and look forward to adding it to my day-to-day routine, I did not find the time to use (and propertly document) it this time around on such short notice.

### Infinite Carousel
I would've loved to build "infinite" carousels on my homepage, but I have not yet created such a tool before. Scrapped due to time constraints.

### Small Images for Mobile/Small devices
For production-level apps, I clearly would not load 1920/1080 images for small devices. Unfortunately, I did not find smaller images with a 16/9 aspect-ratio in this API. Due to time constraints, I did not create an alternate design for mobile/small screens.

### Error handling
While I handle errors from my API calls, I do not show them anywhere in my Vue templates if they do occur. Mostly a time constraint/prioritization issue.

### A state tool and user favorites
I wanted to include a tool where users could add some of their favorite shows to a global state, which I would save in localStorage/cookies. I did not consider it a core feature, so I had to scrap it due to time constraints.

### Skeleton Loading
Would've been a fancy addition. Scrapped due to time constraints.