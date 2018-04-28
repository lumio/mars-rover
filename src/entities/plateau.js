class Plateau {
  constructor( width, height, hardLimit = true ) {
    this.dimensions = { width, height };
    this.hardLimit = hardLimit;
    this.roverPositions = [];
  }

  addRover( roverPosition ) {
    for ( const pos of this.roverPositions ) {
      if ( pos.x === roverPosition.x && pos.y === roverPosition.y ) {
        throw new Error( 'Occupied landing point' );
      }
    }

    const index = this.roverPositions.length;
    this.roverPositions[ index ] = roverPosition;
    return index;
  }

  updateRoverPosition( index, roverPosition ) {
    this.roverPositions[ index ] = roverPosition;
  }

  isWithin( newRoverPosition ) {
    if ( !this.hardLimit ) {
      return true;
    }

    const { width, height } = this.dimensions;
    const outOfBound =
      ( newRoverPosition.x < 0 || newRoverPosition.x > width )
      || ( newRoverPosition.y < 0 || newRoverPosition.y > height );

    if ( outOfBound ) {
      return false;
    }

    return true;
  }

  isMovementAllowed( newRoverPosition ) {
    for ( const pos of this.roverPositions ) {
      if ( pos.x === newRoverPosition.x && pos.y === newRoverPosition.y ) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Plateau;
