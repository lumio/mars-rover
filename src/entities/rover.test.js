const { expect } = require( 'chai' );
const Rover = require( './rover' );
const Plateau = require( './plateau' );

describe( 'entities/rover', () => {
  const p = new Plateau( 100, 100, false );

  it( 'initiates new rover instance', () => {
    const r = new Rover( 5, 5, 'S', p );
    expect( r.getPosition() ).to.deep.equal( { x: 5, y: 5 } );
    expect( r.getOrientation() ).to.equal( 'S' );
  } );

  it( 'execute instructions', () => {
    const r = new Rover( 3, 3, 'E', p );
    r.execInstructions( 'MMRMMRMRRMLM' );
    expect( r.getPosition() ).to.deep.equal( { x: 5, y: 2 } );
    expect( r.getOrientation() ).to.equal( 'N' );
  } );
} );
