const { expect } = require( 'chai' );
const Plateau = require( './plateau' );
const Rover = require( './rover' );

describe( 'entities/plateau', () => {
  const testPos = {
    x: -1,
    y: 6,
  };

  it( 'should always be within limits, even when it\'s not', () => {
    const p = new Plateau( 5, 5, false );
    expect( p.isWithin( testPos ) ).to.equal( true );
  } );

  it( 'should be out of bound', () => {
    const p = new Plateau( 5, 5, true );
    expect( p.isWithin( testPos ) ).to.equal( false );
  } );

  it( 'should throw on occupied landing position', () => {
    expect( () => {
      const p = new Plateau( 5, 5, true );
      const r1 = new Rover( 1, 2, 'N', p );
      const r2 = new Rover( 1, 2, 'E', p );
    } ).to.throw();
  } );

  it( 'should check movement', () => {
    const p = new Plateau( 5, 5, true );
    const r1 = new Rover( 1, 2, 'N', p );
    const r2 = new Rover( 2, 2, 'W', p );
    r2.move();
    const pos = r2.getPosition();
    expect( pos ).to.deep.equal( { x: 2, y: 2 } );
  } );
} );
