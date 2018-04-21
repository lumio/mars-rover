class Plateau {
  constructor( width, height, hardLimit = true ) {
    this.dimensions = { width, height };
    this.hardLimit = hardLimit;
  }

  isWithin( positionObj ) {
    if ( !this.hardLimit ) {
      return true;
    }

    const { width, height } = this.dimensions;
    const outOfBound =
      ( positionObj.x < 0 || positionObj.x > width )
      || ( positionObj.y < 0 || positionObj.y > height );

    if ( outOfBound ) {
      return false;
    }

    return true;
  }
}

module.exports = Plateau;