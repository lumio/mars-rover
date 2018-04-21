const { expect } = require( 'chai' );
const {
  generateQuestions,
  computeAnswers,
} = require( './compute' );

describe( 'helpers/compute', () => {
  it( 'generates questions', () => {
    const generated = generateQuestions( 2 );
    expect( generated.length ).to.equal( 5 );
  } );

  it( 'computes correct answers', () => {
    const answers = {
      'plateau': '5 5',
      'rover1Landing': '1 2 S',
      'rover1Instructions': 'LMLMLMLMM'
    };

    const result = computeAnswers( answers, 1 );
    expect( result ).to.deep.equal( { Rover1: '1 1 S' } );
  } );
} );
