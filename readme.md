# Simple Meteor React Boilerplate

This is a simple boilerplate to be used as a starting point for developing Meteor + React projects.

## Structure

### Packages used (in addition to base packages)

* Meteor Core
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
* Collections
  * [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
* Views and Layouts
  * [react](https://github.com/reactjs/react-meteor)
  * [kadira:react-layout](https://github.com/kadirahq/meteor-react-layout)  
* Testing
  * [sanjo:jasmine](https://github.com/xolvio/meteor-jasmine)
  * [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter)

 "insecure" and "autopublish" packages are removed by default

### Folder structure

```
client/             # Client folder
    components/     # React components
      general/      # General purpose components
      layouts/      # Shared layout components
    config/         # Configuration files (on the client)
    stylesheets/    # Stylesheets
lib/                # Library files  
model/              # Model files, for each Meteor.Collection
server/             # Server folder
    methods/        # Meteor methods    
    publications/   # Collection publications
tests/              # Test files
```
