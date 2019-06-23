# Search Text Library

## Steps to run the application

1. Run `npm install`
2. Run `npm start` (runs `webpack-dev-server`)
3. Open `http://localhost:4200` on your browser.

# Application structure and it's uses
    Application consists of 4 components, Service and a Pipe:
##    1. Search Bar Component
    This component is used to search for the presence of a string in the application. Also, it highlights the string wherever it finds a match.
### textHighlight(searchString: any)
    This method gets called when a user searches for any string in the text. Parameter is sent to search-text service via searchStringInText() method where searched string is passed to components where we match for strings.

##  2. Main Section Component
    This component is used to display selected text in the main section view.

### getSearchedString()
    This method gets called on OnInit. It subscribes to data coming from service and passed to the Pipe filter 'highlight' where it checks for matching string and replaces with matching string.
### getTextToMainSection(event: any)
    This method gets called when a user selects a text from side bar. Text gets emitted from Side Bar Component to Main section Component. Emitted text is set in the component's view section.

##  3. Side Bar Component
    This component contains another component as a child(Add Text Componet) and used to store texts in a list. Text can be deleted using 'x' button

### getSearchedString()
    This method gets called on OnInit. It subscribes to data coming from service and passed to the Pipe filter 'highlight' where it checks for matching string and replaces with matching string.
### getListOfTexts()
    This method gets called on OnInit. It subscribes to data coming from service and stores list of texts that appears in component.
### deleteText()
    This method used to send a string value to service where it gets deleted from the list and updated list is sent back to the component.
### fetchTextToMainSection(event)
    This method is used to relay text to Main Section component where it gets displayed. Data gets emitted through event emitter 'textRelaytoMainSection'.
##  4. Add Text Component
    This component is used to add texts in the list.

### storeText(textInput)
    This method gets called when a user tries to add any text and clicks on 'Add Text' button in the sidebar, it takes the text and add it to the list

Service:-
##  Search-text Service
    This service is used to perform various functionality around adding a text in the list to replace it, from deleting a text to highlighting it.

### getTextList()
    This method contains all the text in the list. On application load, the list is empty.

### addTextToList(text) 
    This method gets called from AddTextComponent and stores a text in the list and sends it to the side bar component using next() method

### getTextUpdatedListener()
    This observable is for text list

### getSearchedStringListener
    This observable is for string text

### searchStringInText(text) 
    This method relays text value to the component where searched string has to be highlighted

### deleteTextFromList(index) 
    This method deletes a text from the list based on index. Upon deletion, updated text list is sent back to the component
Pipe:-
##  Highlight-Search Pipe
    This pipe is implemented to filter string using regex expression and replaces it matching string and adds mark element to highlight it.

### transform(text, searchString)
    This method takes two parameters namely text- a set of text and a string- which is to be searched in the set of text.
    