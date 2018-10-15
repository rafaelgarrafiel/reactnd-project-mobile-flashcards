import { AsyncStorage } from 'react-native'
const KEY = 'Decks';

let data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
};

function setDummyData () {
  AsyncStorage.setItem(KEY, JSON.stringify(data))
  return data
}

export function formatResults (results) {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}

export function initialData() {
    AsyncStorage.setItem(KEY, JSON.stringify(data));
    return data;
}

export function getDecks() {
    return AsyncStorage.getItem(KEY)
      .then(formatResults)

    // return AsyncStorage.getItem(KEY).then(results => {
    //     return results === null ? initialData() : JSON.parse(results)
    // });
}

export function saveDeckTitle(deck) {
  console.log(deck)
  // AsyncStorage.setItem("myKey", "My value here");
    return AsyncStorage.mergeItem(KEY, JSON.stringify(deck));
    // return AsyncStorage.mergeItem(KEY, JSON.stringify(deck));
}

export function getDeck (id) {
}


export function addCardToDeck ({ card, title }) {
}



// import { AsyncStorage } from 'react-native';


// export const getDecks = () => AsyncStorage.getItem(FLASH_CARDS_KEY).then((data) => {
//   console.log("Teste")
//   if (JSON.parse(data) !== null) {
//     return JSON.parse(data);
//   }

//   AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(decksMock));
//   return AsyncStorage.getItem(FLASH_CARDS_KEY).then(dataMock => JSON.parse(dataMock));
// });

// export const getDeck = title => AsyncStorage.getItem(FLASH_CARDS_KEY).then((decks) => {
//   const decksJSON = JSON.parse(decks) || [];
//   return decksJSON.find(deck => deck.title === title);
// });

// export const saveDeckTitle = title => AsyncStorage.getItem(FLASH_CARDS_KEY).then((decks) => {
//   const decksJSON = JSON.parse(decks) || [];
//   const newDeck = {
//     title,
//     result: '',
//     questions: [],
//   };
//   const newDeckList = [...decksJSON, newDeck];
//   AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(newDeckList));
//   return newDeck;
// });

// export const saveCard = (title, question) => AsyncStorage.getItem(FLASH_CARDS_KEY)
//   .then((decks) => {
//     const decksJSON = JSON.parse(decks) || [];
//     const newDeckList = decksJSON.map((deck) => {
//       if (deck.title === title) {
//         deck.questions.push(question);
//       }
//       return deck;
//     });
//     AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(newDeckList));
//   });

// export const saveResult = (title, result) => AsyncStorage.getItem(FLASH_CARDS_KEY)
//   .then((decks) => {
//     const decksJSON = JSON.parse(decks) || [];
//     const newDeckList = decksJSON.map((deck) => {
//       if (deck.title === title) {
//         deck.result = result; // eslint-disable-line
//       }
//       return deck;
//     });
//     AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(newDeckList));
//   });