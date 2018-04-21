const inquirer = require( 'inquirer' );

const {
  generateQuestions,
  computeAnswers,
} = require( './helpers/questions' );

const prompt = async () => {
  const roverCount = 1;
  const questions = generateQuestions( roverCount );

  const answers = await inquirer.prompt( questions )
  const output = computeAnswers( answers, roverCount );
  const outputEntries = Object.entries( output );
  for ( const entry of outputEntries ) {
    console.log( `${ entry[ 0 ] }: ${ entry[ 1 ] }` );
  }
};

if ( process.env.NODE_ENV !== 'test' ) {
  prompt();
}
