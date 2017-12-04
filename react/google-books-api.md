## Google Books API, with React

How to make the google books api play with React:

1. Put this code into the body of your index.html on the React project (if you are using create-react-app, it's in the public folder):
```html
<script type="text/javascript"    src="https://www.google.com/books/jsapi.js"></script>
```

2. You can now find the vital 'google' object on window! Where google tells you to call google.WHATEVER, you'll have to call window.google.WHATEVER

3. You'll have to attach your viewer to a DOM node. It's a good idea to do this part in componentDidMount, but the following works with either document.getElementByID or this.refs:

```javascript
    window.google.books.load()
    const initialize = () => {
      // You can use either this.refs or get it by ID
      // var viewer = new window.google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      var viewer = new window.google.books.DefaultViewer(this.refs.meh);
      viewer.load('ISBN:0738531367');
    } 
    window.google.books.setOnLoadCallback(initialize);
```

4. Somewhere in your component's JSX, have either the ref or the ID that corresponds to where you are trying to attach the Google book viewer, ex:
```html
<div ref="meh" id="viewerCanvas" style={{width: '600px', height: '400px'}}></div> 
```

5. Bear in mind: because this interacts with actual DOM nodes, make sure you work with the it when the DOM exists.

6. Current difficulties: changing the book after it has loaded, changing views and returning (window.google.books.load, window.google.books.setOnLoadCallback - only available the first time loaded, after initialization! ) 

(Google Books API docs)[https://developers.google.com/books/docs/viewer/developers_guide]

