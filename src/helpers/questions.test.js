const { expect } = require( 'chai' );
const {
  generateQuestions,
  computeAnswers,
} = require( './questions' );

describe( 'helpers/questions', () => {
  it( 'generates questions', () => {
    const generated = generateQuestions( 2 );
    expect( generated.length ).to.equal( 5 );
  } );
} );
