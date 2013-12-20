angularjs-image-annotate
========================

Creates a field for annotating, highlighting or drawing over an image. The annotation layer is saved in the model as an png which is Base64 encoded. This can then either be later recomposited with the original image or viewed in isolation.

##Usage
````html
<nim-image-annotate ng-model="myModel" width="1024" height="576" src="test.png" />
````
###Optional attributes
````html
<nim-image-annotate ng-model="myModel" width="1024" height="576" src="test.png" line-col="#F00" line-opacity=".5" line-width="10" />
````
####line-col
Define the colour of the line which the user can draw over the image. Defaults to a glorious yellow highlighter colour.
####line-opacity
Sets the opacity of the line. Expects a value 0-1, defaults to a translucent 0.33. The annotations will be saved to the model at full opacity.
####line-width
Defines the line width. Defaults to a chunky 20px;
