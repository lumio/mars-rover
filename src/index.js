const ROVER_COUNT = +process.env.ROVER_COUNT || 2;

const inquirer = require( 'inquirer' );

const {
  generateQuestions,
  computeAnswers,
} = require( './helpers/compute' );

const prompt = async () => {
  const questions = generateQuestions( ROVER_COUNT );

  const answers = await inquirer.prompt( questions )
  const output = computeAnswers( answers, ROVER_COUNT );
  const outputEntries = Object.entries( output );
  for ( const entry of outputEntries ) {
    console.log( `${ entry[ 0 ] }: ${ entry[ 1 ] }` );
  }
};

if ( process.env.NODE_ENV !== 'test' ) {
  prompt();
}
