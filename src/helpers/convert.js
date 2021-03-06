const possibleValues = [ 'N', 'E', 'S', 'W' ];
const possibleValuesLen = possibleValues.length;

/**
 * Convert degree to a cardinal index
 */
const degToDirectionKey = ( deg ) => {
  if ( deg < 0 || deg > 360 ) {
    throw new Error( 'Invalid degree. Only numbers between 0 and 360 are allowed' );
  }

  let normalized = Math.round( deg / 90 ) % possibleValuesLen;
  if ( normalized < 0 ) {
    normalized = possibleValuesLen + normalized;
  }
  return normalized;
};

const degToDirection = ( deg ) => {
  const directionKey = degToDirectionKey( deg );
  return possibleValues[ directionKey ];
};

const cardinalDirectionToDeg = ( cardinalDirection ) => {
  const index = possibleValues.indexOf( cardinalDirection.toUpperCase() );

  if ( index === -1 ) {
    throw new Error( `Invalid cardinal direction ${ cardinalDirection }` );
  }

  return index * 90;
};

/**
 * Maps degree to a degree between 0 and 360
 */
const normalizeDeg = ( deg ) => {
  let newDeg = deg;
  while ( newDeg < 0 ) {
    newDeg += 360;
  }

  while ( newDeg > 360 ) {
    newDeg -= 360;
  }

  return newDeg;
};

const coordinateStringToObject = ( input, includeOrientation = false ) => {
  const regex = includeOrientation ?
    /^(\d+) (\d+) ([NESW])$/
    : /^(\d+) (\d+)$/;

  const match = input.match( regex );
  if ( !match ) {
    return false;
  }

  const coordinates = {
    x: +match[ 1 ],
    y: +match[ 2 ],
  };

  if ( includeOrientation ) {
    coordinates.orientation = match[ 3 ];
  }

  return coordinates;
};

const coordinateObjectToString = ( coordinates ) => {
  return `${ coordinates.x } ${ coordinates.y }`;
};

module.exports = {
  degToDirectionKey,
  degToDirection,
  cardinalDirectionToDeg,
  normalizeDeg,
  coordinateStringToObject,
  coordinateObjectToString,
};
