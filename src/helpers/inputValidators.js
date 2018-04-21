const required = ( furtherChecks ) => {
  return ( input ) => {
    if ( !input.trim() ) {
      return false;
    }

    if ( furtherChecks ) {
      return furtherChecks( input );
    }

    return true;
  }
}

const coordinates = ( input ) => {
  if ( input.match( /^\d+ \d+$/ ) ) {
    return true;
  }

  return 'Invalid coordinates';
}

const coordinatesWithOrientation = ( input ) => {
  if ( input.match( /^\d+ \d+ [NESW]$/i ) ) {
    return true;
  }

  return 'Invalid coordinates or missing orientation';
}

const instructions = ( input ) => {
  if ( input.match( /^[LRM]+$/i ) ) {
    return true;
  }

  return 'Invalid instructions';
}

module.exports = {
  required,
  coordinates,
  coordinatesWithOrientation,
  instructions,
};
