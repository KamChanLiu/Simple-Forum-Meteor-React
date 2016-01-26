# Simple Meteor React Boilerplate

This is a simple boilerplate to be used as a starting point for developing Meteor + React projects.

## Structure

### Packages used (in addition to base packages)

* Meteor Core
* Routing
  * [kadira:flow-router]
* Views and Layouts
  * [react]
  * [kadira:react-layout]
  * [meteorhacks:flow-layout]

 "insecure" and "autopublish" packages are removed by default

### Folder structure

```
client/ 				# Client folder
    components/      # React components
      general/       # Generalt purpose components
      layouts/       # Shared layout components
    config/             # Configuration files (on the client)
    stylesheets/     # Stylesheets
lib/                # Library files  
model/  				# Model files, for each Meteor.Collection
server/					# Server folder
    methods/            # Meteor methods    
    publications/       # Collection publications
tests/          # Test files
```
