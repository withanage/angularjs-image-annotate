angularjs-image-annotate
========================

Creates a field for annotating, highlighting or drawing over an image. The annotations are saved in the model as a Base64 encoded string.

##Usage
````html
<nim-image-annotate ng-model="myModel" width="1024" height="576" src="test.png" />
````
###Optional attributes
````html
<nim-image-annotate ng-model="myModel" width="1024" height="576" src="test.png" line-col="#F00" line-width="10" />
````
####line-col
Define the colour of the line which the user can draw over the image. Defaults to a glorious yellow highlighter colour.
####line-width
Defines the line width. Defaults to a chunky 20px;
