import data from '../data';

export const GET_RANDOM_CLASS = 'GET_RANDOM_CLASS';
export const RECEIVE_RANDOM_CLASS = 'RECEIVE_RANDOM_CLASS';

export function getRandomClass() {
    return {
        type: GET_RANDOM_CLASS
    }
}

export function receiveRandomClass(randomClass) {
    return {
        type: RECEIVE_RANDOM_CLASS,
        randomClass: randomClass
    }
}

export function fetchRandomClass() {
    return function(dispatch) {
        dispatch(getRandomClass());

        var characters = data.characters;
        var weapons = data.weapons;

        var numberOfCharacters = characters.length >>> 0;
        var randomCharacter = characters[Math.floor(Math.random() * numberOfCharacters)];

        var numberOfWeapons = weapons.length >>> 0;
        var randomWeapon = weapons[Math.floor(Math.random() * numberOfWeapons)];

        return dispatch(receiveRandomClass({
            character: randomCharacter,
            weapon: randomWeapon
        }))
    }
}