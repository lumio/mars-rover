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
}

/**
 * Convert degree to cardinal direction
 */
const degToDirection = ( deg ) => {
  const directionKey = degToDirectionKey( deg );
  return possibleValues[ directionKey ];
}

module.exports = {
  degToDirectionKey,
  degToDirection,
};
