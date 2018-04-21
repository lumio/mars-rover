const { expect } = require( 'chai' );
const {
  degToDirectionKey,
  degToDirection,
  normalizeDeg,
} = require( './convert' );

describe( 'helpers', () => {
  it( 'converts degree to direction key', () => {
    expect( degToDirectionKey( 0 ) ).to.equal( 0 );
    expect( degToDirectionKey( 90 ) ).to.equal( 1 );
    expect( degToDirectionKey( 180 ) ).to.equal( 2 );
    expect( degToDirectionKey( 270 ) ).to.equal( 3 );
    expect( degToDirectionKey( 360 ) ).to.equal( 0 );
  } );

  it( 'throws error when out of range', () => {
    expect( () => degToDirectionKey( -90 ) ).to.throw();
  } );

  it( 'converts degree to direction', () => {
    expect( degToDirection( 0 ) ).to.equal( 'N' );
    expect( degToDirection( 90 ) ).to.equal( 'E' );
    expect( degToDirection( 180 ) ).to.equal( 'S' );
    expect( degToDirection( 270 ) ).to.equal( 'W' );
    expect( degToDirection( 360 ) ).to.equal( 'N' );
  } );

  it( 'normalizes degree that are out of range', () => {
    expect( normalizeDeg( -180 ) ).to.equal( 180 );
    expect( normalizeDeg( -360 ) ).to.equal( 0 );
    expect( normalizeDeg( -720 ) ).to.equal( 0 );
    expect( normalizeDeg( 720 ) ).to.equal( 360 );

    expect( normalizeDeg( 0 ) ).to.equal( 0 );
    expect( normalizeDeg( 360 ) ).to.equal( 360 );
  } );
} );