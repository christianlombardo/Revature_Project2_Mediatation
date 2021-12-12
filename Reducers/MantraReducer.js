const MantraReducer = (state = " ", action) => {

    switch(action.type){
        case 'mantra':
                return {   id: 1,
                    name: 'Mantra Meditation',
                    image: mantras,
                    shortDescription: 'Meant for relaxation and to increase focus through repetition of a mantra',
                    longDiscription: 'Mentra meditation is the reciting of a word or phrase. This can be done either outloud or in the mind.',
                    timespend: 30,
                    link: '/MeditationDetailPage',
                    instructions: {1: 'Take 3 relaxed deep breaths....',
                                2: 'Close your eyes....',
                                3: 'See yourself on the beach or somewhere in nature with waterfalls in the forest.',
                                4: 'Softly repeat this manta: "I Am whole, calm, healthy, strong, caring, respectful, powerful and loving."'},
                 }

                 
            }
        }
        export default MantraReducer