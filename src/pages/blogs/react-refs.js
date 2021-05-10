import React from 'react'

 const ReactRefs = () => {
    return (
        <div>
            <p>
            React.js has had an edge over other user interface libraries and frameworks
            for some time now, and while religious Vue and Angular developers will always jump at
            any opportunity to have this argument, it is very clear that one has to have React in
            their tool box if they want to stay relevant in this fast moving Web development industry. 
            Talking about React, one of the slightly confusing parts of it is the concept of Refs.

React is peculiar for several reasons, one of them is the way the Document Object Mode (DOM)  is updated, it uses a Virtual DOM to keep a visual representation of the UI in memory and synced with the “real” DOM, this means that the program interacts with the Virtual DOM, and the Virtual DOM is responsible for updating the UI whenever it detects changes. This is different when you are programming a web application using HTML and Vanilla JavaScript where you get access to the DOM directly. 

In React to  re-render new data. props are the only way that parent components interact with their children, never directly modifying the DOM. But there are special situations when the DOM has to be modified. And React provides a means to do this using Refs. The official react documentation advises when it is okay to use Refs
 Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
But it also warns that one should “Avoid using refs for anything that can be done declaratively”,
It also clearly states “Don’t overuse Refs”, so before you go about using it for anything, you should first yourself ask if there is a way the data you want to access can be stored as a state in higher component and then pass the information down as a prop to the child component it will be used. This is another popular concept in React called Lifting the State.

So there it is, Refs in React is just a means to access the DOM nodes directly, bypassing the virtual dome

            </p>
        </div>
    )
}

export default ReactRefs