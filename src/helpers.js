const possibleValues = [ 'N', 'E', 'S', 'W' ];
const possibleValuesLen = possibleValues.length;

const convertDegToDirectionKey = ( deg ) => {
  if ( deg < 0 || deg > 360 ) {
    throw new Error( 'Invalid degree. Only numbers between 0 and 360 are allowed' );
  }

  let normalized = Math.round( deg / 90 ) % possibleValuesLen;
  if ( normalized < 0 ) {
    normalized = possibleValuesLen + normalized;
  }
  return normalized;
}

const convertDegToDirection = ( deg ) => {
  const directionKey = convertDegToDirectionKey( deg );
  return possibleValues[ directionKey ];
}

module.exports = {
  convertDegToDirectionKey,
  convertDegToDirection,
};