const { expect } = require( 'chai' );
const {
  convertDegToDirectionKey,
  convertDegToDirection,
} = require( './helpers' );

describe( 'helpers', () => {
  it( 'converts degree to direction key', () => {
    // Test positive degree between 0 and 360 for a correct conversion.
    expect( convertDegToDirectionKey( 0 ) ).to.equal( 0 );
    // expect( convertDegToDirectionKey( 45 ) ).to.equal( 0 );
    expect( convertDegToDirectionKey( 90 ) ).to.equal( 1 );
    expect( convertDegToDirectionKey( 180 ) ).to.equal( 2 );
    expect( convertDegToDirectionKey( 270 ) ).to.equal( 3 );
    expect( convertDegToDirectionKey( 360 ) ).to.equal( 0 );
  } );

  it( 'throws error when out of range', () => {
    expect( () => convertDegToDirectionKey( -90 ) ).to.throw();
  } );

  it( 'converts degree to direction', () => {
    expect( convertDegToDirection( 0 ) ).to.equal( 'N' );
    // expect( convertDegToDirection( 45 ) ).to.equal( 'N' );
    expect( convertDegToDirection( 90 ) ).to.equal( 'E' );
    expect( convertDegToDirection( 180 ) ).to.equal( 'S' );
    expect( convertDegToDirection( 270 ) ).to.equal( 'W' );
    expect( convertDegToDirection( 360 ) ).to.equal( 'N' );
  } );
} );