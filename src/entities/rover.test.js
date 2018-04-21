const { expect } = require( 'chai' );
const Rover = require( './rover' );

describe( 'Rover', () => {
  it( 'initiates new rover instance', () => {
    const r = new Rover( 5, 5, 'S' );
    expect( r.getPosition() ).to.deep.equal( { x: 5, y: 5 } );
    expect( r.getOrientation() ).to.equal( 'S' );
  } );

  it( 'execute instructions', () => {
    const r = new Rover( 3, 3, 'E' );
    r.execInstructions( 'MMRMMRMRRMLM' );
    expect( r.getPosition() ).to.deep.equal( { x: 5, y: 2 } );
    expect( r.getOrientation() ).to.equal( 'N' );
  } );
} );
