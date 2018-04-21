class Plateau {
  constructor( width, height, hardLimit = true ) {
    this.dimensions = { width, height };
    this.hardLimit = hardLimit;
  }

  isWithin( positionObj ) {
    if ( !this.hardLimit ) {
      return true;
    }

    const outOfBound =
      ( positionObj.x < 0 || positionObj.x > this.width )
      || ( positionObj.y < 0 || positionObj.y > this.height );

    if ( outOfBound ) {
      return false;
    }

    return true;
  }
}

module.exports = Plateau;