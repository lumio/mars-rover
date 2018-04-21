const Plateau = require( '../entities/plateau' );
const Rover = require( '../entities/rover' );

const {
  required,
  coordinates,
  coordinatesWithOrientation,
  instructions,
} = require( './inputValidators' );
const {
  coordinateStringToObject,
  coordinateObjectToString,
} = require( './convert' );

const generateQuestions = ( roverCount = 1 ) => {
  const questions = [
    {
      name: 'plateau',
      message: 'Plateau',
      validate: required( coordinates ),
      prefix: '',
    },
  ];

  for ( let i = 1; i <= roverCount; ++i ) {
    questions.push( {
      name: `rover${ i }Landing`,
      message: `Rover${ i } Landing`,
      validate: required( coordinatesWithOrientation ),
      prefix: '',
    }, {
      name: `rover${ i }Instructions`,
      message: `Rover${ i } Instructions`,
      validate: required( instructions ),
      prefix: '',
    } );
  }

  return questions;
};

const computeAnswers = ( answers, roverCount = 1 ) => {
  const output = {};
  const plateauDimensions = coordinateStringToObject( answers.plateau );
  const p = new Plateau( plateauDimensions.x, plateauDimensions.y, false );

  for ( let i = 1; i <= roverCount; ++i ) {
    const coords = coordinateStringToObject( answers[ `rover${ i }Landing` ], true );
    const instructions = answers[ `rover${ i }Instructions` ];
    const r = new Rover( coords.x, coords.y, coords.orientation, p );
    r.execInstructions( instructions );
    output[ `Rover${ i }` ] =
      `${ coordinateObjectToString( r.getPosition() ) } ${ r.getOrientation() }`;
  }

  return output;
};

module.exports = {
  generateQuestions,
  computeAnswers,
};