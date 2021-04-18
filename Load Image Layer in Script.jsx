var pngLayer = app.project.activeItem.layer(1); // put your reference to the png layer here
var pngItem = pngLayer.source;
var pngFile = pngItem.file;

// now use the pngFile to populate an image in your script (here's just a super basic script to have an image in it)
var window = new Window("palette", "imageLayerLoader", undefined);
var image = window.add("image", undefined, pngFile);

window.center();
window.show();