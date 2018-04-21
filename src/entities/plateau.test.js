const { expect } = require( 'chai' );
const Plateau = require( './plateau' );

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
} );
