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
      'rover1Instructions': 'LMLMLMLMM',
    };

    const result = computeAnswers( answers, 1 );
    expect( result ).to.deep.equal( { Rover1: '1 1 S' } );
  } );

  it( 'computes answers and shows errors', () => {
    const answers1 = {
      'plateau': '5 5',
      'rover1Landing': '0 0 S',
      'rover1Instructions': 'MMLMLMLMM',
    };

    const result1 = computeAnswers( answers1, 1 );
    expect( result1.Rover1 ).to.include( 'Error: Illegal movement' );

    const answers2 = {
      plateau: '3 3',
      rover1Landing: '3 3 N',
      rover1Instructions: 'M',
    };
    const result2 = computeAnswers( answers2, 1 );
    expect( result2.Rover1 ).to.include( 'Error: Illegal movement' );
  } );
} );
