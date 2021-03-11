/*
*   I decided to create a mock API response object for the data using a Promise for the cards instead of hard-coding them.
*/
const data = [
    {
        id: 1,
        title: 'Lake Inniscarra, Ireland - Pyramid',
        duration: '30:53',
        distance: '6248',
        thumb: './images/lake-inniscarra-thumb.jpg',
        trainer_img: './images/lake-inniscarra-trainer.jpg',
    },
    {
        id: 2,
        title: 'Performance Series',
        thumb: './images/performance-series-thumb.jpg',
        trainer_img: './images/performance-series-trainer.jpg',
        collections: 9
    },
    {
        id: 3,
        title: 'Slow Pulls and Fast Intervals',
        duration: '44:15',
        distance: '9948',
        thumb: './images/slow-pulls-thumb.jpg',
        trainer_img: './images/slow-pulls-trainer.jpg',
    },
    {
        id: 4,
        title: '20 Minutes to Toned',
        thumb: './images/20-minutes-to-toned-thumb.jpg',
        trainer_img: './images/20-minutes-to-toned-trainer.jpg',
        collections: 12
    },
    {
        id: 5,
        title: 'Charles Race, Boston, Massachusetts',
        duration: '36:22',
        distance: '8648',
        thumb: './images/charles-race-thumb.jpg',
        trainer_img: './images/charles-race-trainer.jpg',
    },
    {
        id: 6,
        title: 'Full-Body HIIT Series',
        thumb: './images/full-body-hiit-thumb.jpg',
        trainer_img: './images/full-body-hiit-trainer.jpg',
        collections: 12
    },
    {
        id: 7,
        title: 'Kafue River, Zambia - Power Stroke Pyramid',
        duration: '22:22',
        distance: '4660',
        thumb: './images/kafue-river-thumb.jpg',
        trainer_img: './images/kafue-river-trainer.jpg',
    },
    {
        id: 8,
        title: 'Shred & Burn Series',
        thumb: './images/shred-and-burn-thumb.jpg',
        trainer_img: './images/shred-and-burn-trainer.jpg',
        collections: 16
    }
]

//Mock API response. Currently waits for 1000ms for promise to resolve.
//Can see error handling by switching error variable to true
export const getData = () => new Promise((resolve, reject) => {
    const error = false;
    if(error){
        reject({data: null, message: 'Error'})
    }
    setTimeout(() => {
        resolve({data: data, message: 'Success'})
    }, 1000);
})