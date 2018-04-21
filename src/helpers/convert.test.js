const { expect } = require( 'chai' );
const {
  degToDirectionKey,
  degToDirection,
  cardinalDirectionToDeg,
  normalizeDeg,
  coordinateStringToObject,
  coordinateObjectToString,
} = require( './convert' );

describe( 'helpers/convert', () => {
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

  it( 'converts cardinal direction to degree', () => {
    expect( cardinalDirectionToDeg( 'N' ) ).to.equal( 0 );
    expect( cardinalDirectionToDeg( 'E' ) ).to.equal( 90 );
    expect( cardinalDirectionToDeg( 'S' ) ).to.equal( 180 );
    expect( cardinalDirectionToDeg( 'W' ) ).to.equal( 270 );
  } );

  it( 'normalizes degree that are out of range', () => {
    expect( normalizeDeg( -180 ) ).to.equal( 180 );
    expect( normalizeDeg( -360 ) ).to.equal( 0 );
    expect( normalizeDeg( -720 ) ).to.equal( 0 );
    expect( normalizeDeg( 720 ) ).to.equal( 360 );

    expect( normalizeDeg( 0 ) ).to.equal( 0 );
    expect( normalizeDeg( 360 ) ).to.equal( 360 );
  } );

  it( 'converts coordination string to coordinates', () => {
    expect( coordinateStringToObject( '10 20' ) )
      .to.deep.equal( { x: 10, y: 20 } );
    expect( coordinateStringToObject( '10 20 N', true ) )
      .to.deep.equal( { x: 10, y: 20, orientation: 'N' } );
  } );

  it( 'converts coordinates to string', () => {
    expect(
      coordinateObjectToString( { x: 10, y: 20 } )
    ).to.equal( '10 20' );
  } );
} );