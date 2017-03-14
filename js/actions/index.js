

export const SUBMIT_NUMBER = 'SUBMIT_NUMBER';
export const submitNumber = (number) => ({
    type: SUBMIT_NUMBER,
    number
});



export const START_NEW_GAME = 'START_NEW_GAME';
export const NewGame = () => ({
    type: START_NEW_GAME,
    randomNum: Math.floor(Math.random() *100) +1
});



export const WHAT_DESCRIPTION= 'WHAT_DESCRIPTION';
export const whatDecription = () => ({
    type: WHAT_DESCRIPTION,
});
