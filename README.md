# Instructions

***PLESAE READ***

Navigate to the frontend-dev-assessment directory
``` 
cd frontend-dev-assessment 
```

From the frontend-dev-assessment directory

```
npm i
```

Build

```
npm run build
```

Start the dev server

```
npm run dev-server
```

Go to http://localhost:8080/ 

### For testing

```
npm run test -- --watchAll
```

# JSON string provided

The JSON string that was provided was not a JSON string. It was a JSON object, but was missing a comma after the 'contentA' value. I added the comma and converted the JOSN object into a JSON string and placed it in another file called boardContentJSONString.js. I then parsed it in my componentDidMount located in BoardContainer.jsx.

# Used SCSS for style & Normalize.css

I prefer to use SCSS or SAAS to take advantage of the constant variables you can create to keep things like font size, colors, and sizing consistent. I also love some of the features it has that can help with some cool styling. Additionally I used Normalized.css to make the browsers render elements consistently.


# Testing => Jest

It's a common rule to test your application. I was pressed for time, so I wasn't able to do a lot of testing, but one should always do testing when working on an application; especially, larger ones.

# Redux => Thunk

I've almost always use Redux, even for small project. The reason for that is, those small project can potentially turn into large ones. Since this project was small, and isn't going to be part of a bigger project, there was no need to use Redux. My state was manageable and I only had 2 click handlers that updated state along with componentDidMount.

I started switching this over to Redux in case you would ask, but due to time I'm not done. I'm pretty close!


# Multiple Rendering of the component in #1

When I clarified you mentioned to just render 3 of them. They all behave independently, holding their own state. The way I rendered them is from the App component.

When I quickly converted this over to Redux, this was an issue! I know I mentioned above this was too small for Redux, but I had solve this problem. I didn't have time; however, the solutions I came up with was:

(1) Using reducer-action-interceptor. Here's information on it below:
https://github.com/jony89/reducer-action-interceptor

(2) Reorganizing my state and create 'num' times to render the component. In this case it would be 3! I would have the data (JSON string) parsed in my Action Creators, creating an array of 3 sets of data with a couple of true/false values, and passing that in as a payload to the action creator that's dispatched in my componentDidMount. This would update the Redux store with a set for each component. Of course i would give each <BoardContainer/> a unique id.

