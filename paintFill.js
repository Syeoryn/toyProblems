// Implement the 'paint fill' function in image editing functions.
// Given an image (two dimensional array), a specific point
// within it, and a specific color, fill the surrounding area
// until the entire area is the new color

var paintFill = function(image, newColor, origin, originColor){
  originColor = originColor || image[origin[0]][origin[1]];
  // change the originColor to newColor
  image[origin[0]][origin[1]] = newColor;
  // Then, starting from the origin:
  // if above is initial origin color
  if(image[origin[0] + 1][origin[1]] === originColor){
    // recurse on that point
    paintFill(image, newColor, [origin[0] + 1, origin[1]], originColor);
  }

  // if right is initial origin color
  if(image[origin[0]][origin[1] + 1] === originColor){
    // recurse on that point
    paintFill(image, newColor, [origin[0], origin[1] + 1], originColor);
  }

  // if below is initial origin color
  if(image[origin[0] - 1][origin[1]] === originColor){
    // recurse on that point
    paintFill(image, newColor, [origin[0] - 1, origin[1]], originColor);
  }

  // if left is initial origin color
  if(image[origin[0]][origin[1] - 1] === originColor){
    // recurse on that point
    paintFill(image, newColor, [origin[0], origin[1] - 1], originColor);
  }
  return image;
}
