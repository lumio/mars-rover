const {
  cardinalDirectionToDeg,
  degToDirection,
  normalizeDeg,
} = require( '../helpers/convert' );
const deltaPos = require( '../helpers/delta' );

class Rover {
  constructor( x, y, orientation, plateau = null ) {
    const position = {
      x: 0 | x,
      y: 0 | y,
    };
    this.position = position;
    this.orientationDeg = cardinalDirectionToDeg( orientation || 'N' );
    this.plateau = plateau;
  }

  execInstructions( instructions ) {
    const tokens = instructions.split( '' );
    for ( const command of tokens ) {
      switch ( command ) {
        case 'L':
          this.turnLeft();
          break;

        case 'R':
          this.turnRight();
          break;

        case 'M':
          this.move();
          break;

        default:
          throw new Error( `Illegal instruction ${ command }` );
      }
    }
  }

  move() {
    const cardinalDirection = degToDirection( this.orientationDeg );
    const delta = deltaPos[ cardinalDirection ];
    if ( !delta ) {
      throw new Error( `Internal error! Cannot find delta for orientation of ${ cardinalDirection }` );
    }

    const newPosition = {
      x: this.position.x + delta.x,
      y: this.position.y + delta.y,
    };

    if ( this.plateau && !this.plateau.isWithin( newPosition ) ) {
      throw new Error( 'Illegal movement' );
    }

    this.position = newPosition;
  }

  turn( degDelta ) {
    this.orientationDeg = normalizeDeg( this.orientationDeg + degDelta );
  }

  turnLeft() {
    this.turn( -90 );
  }

  turnRight() {
    this.turn( 90 );
  }

  getPosition() {
    return { ...this.position };
  }

  getOrientation() {
    return degToDirection( this.orientationDeg );
  }
}

module.exports = Rover;