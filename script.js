//Original data
const sports = ['Football', 'Basketball', 'Volleyball', 'Swimming', 'Boxing'];
const jobs = ['Doctor', 'Hardware Development', 'Data Analyst', 'Website Development', 'Software Development'];
const personalities = ['Active', 'Quiet', 'Smart', 'Sweet', 'Normal'];

//Generate random numbers to extract random content for prediction
//max is the ceiling limit of the array
const randomNumber = (max) => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * max);
};

//Extract random content to predict the future
const extractInfor = () => {
    //Returns an object that holds the randomly retrieved information
    return {
        //Random access to array
        _sport: sports[randomNumber(sports.length)],
        _job: jobs[randomNumber(jobs.length)],
        _personalityPerson: personalities[randomNumber(personalities.length)],
        get sport() {
            if (this._sport === '') {
                return 'Nothing';
            }
            return this._sport;
        },
        get job() {
            if (this._job === '') {
                return 'Lying at home';
            }
            return this._job;
        },
        get personalityPerson() {
            if (this._personalityPerson === '') {
                return 'Alone forever';
            }
            return this._personalityPerson;
        }
    };

};

//Display the fortune teller's prediction on the screen
const displayMess = () => {
    const mainContent = extractInfor();
    const sportFuture = mainContent.sport;
    const jobFuture = mainContent.job;
    const personalityPersonFuture = mainContent.personalityPerson;

    console.log('Hi! I am a Fortune teller. I can see some things about you.\n' 
                + 'In the future:\n'
                + 'You will be a great ' + sportFuture + ' player.\n'
                + 'You are a famous ' + jobFuture + '.\n'
                + 'And, Your lover is quite ' + personalityPersonFuture + '.');
};

displayMess();