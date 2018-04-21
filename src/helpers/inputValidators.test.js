const { expect } = require( 'chai' );
const {
  required,
  coordinates,
  coordinatesWithOrientation,
  instructions,
} = require( './inputValidators' );

describe( 'helpers/inputValidators', () => {
  it( 'should be required', () => {
    expect( required()( '' ) ).to.equal( false );
    expect( required()( 'test' ) ).to.equal( true );
  } );

  it( 'should be a valid coordinate', () => {
    expect( required( coordinates )( '10' ) ).to.not.equal( true );
    expect( required( coordinates )( '10 20' ) ).to.equal( true );
  } );

  it( 'should be a valid coordinate with orientation', () => {
    expect( required( coordinatesWithOrientation )( '10' ) ).to.not.equal( true );
    expect( required( coordinatesWithOrientation )( '10 20' ) ).to.not.equal( true );
    expect( required( coordinatesWithOrientation )( '10 20 N' ) ).to.equal( true );
  } );

  it( 'should be a valid instruction', () => {
    expect( required( instructions )( 'ABC' ) ).to.not.equal( true );
    expect( required( instructions )( 'RRMMLM' ) ).to.equal( true );
  } );
} );
