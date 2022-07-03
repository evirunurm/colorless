const fs = require('fs');
const LineReader = require('readline');

const tracksObj = require('./tracks.json');
const tracksURL = './tracks.json';

const Interface = (() => {
    let readline;

    const printMenu = () => {
        console.log(`Choose what to do next :\n`)
        console.log(`1.   ADD A TRACK\n2.   DELETE A TRACK\n3.   MODIFY A TRACK\n4.   STOP\n`);
    }

    // Prints each track with their index
    const printTracks = () => {
        for (let i = 0; i < tracksObj.tracks.length; i++) {
            console.log(`${i}   ${tracksObj.tracks[i]?.name}`)
        }
    }

    const createInterface = () => {
        readline = LineReader.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    const askInput = (quote) => {
        return new Promise((resolve) => {
            readline.question(quote, (answer) => {
                resolve(answer); // Returns the answer and fulfills the Promise
                readline.close();
            });
        });

    }

    return {
        printTracks,
        askInput,
        createInterface,
        printMenu
    }
})();




const Logic = ( () => {
    const validAnswer = (input) => {
        return (input === '1' || input === '2' || input === '3');
    }

    const manageInput = async (answer) => {
        switch (answer) {
            case '1':
                Interface.createInterface();
                const name = await Interface.askInput('Name : ');
                Interface.createInterface();
                const cover = await Interface.askInput('Cover archive name (name.png) : ');
                Interface.createInterface();
                const release = await Interface.askInput('Release date (YYYY/MM/DD) : ');
                Interface.createInterface();
                const linkYoutube = await Interface.askInput('Link Youtube : ');
                Interface.createInterface();
                const linkSpotify = await Interface.askInput('Link Spotify (optional:ENTER) : ');
                Interface.createInterface();
                const linkItunes = await Interface.askInput('Link Itunes (optional:ENTER) : ');
                Interface.createInterface();
                const linkApplemusic = await Interface.askInput('Link Apple Music (optional:ENTER) : ');
                Interface.createInterface();
                const linkAudius = await Interface.askInput('Link Audius (optional:ENTER) : ');

                const trackObject = {
                    "name" : name ,
                    "cover" : cover,
                    "release" : release,
                    "linkYoutube" : linkYoutube,
                    "linkSpotify" : linkSpotify,
                    "linkItunes" : linkItunes,
                    "linkApplemusic" : linkApplemusic,
                    "linkAudius" : linkAudius,
                }

                tracksObj.tracks.push(trackObject);
                saveTrack(tracksURL, tracksObj);
                break;
            case '2':
                Interface.printTracks();
                console.log('\n Write "STOP" to cancel everything.');
                let trackIndex;
                do {
                    Interface.createInterface();
                    trackIndex = await Interface.askInput('Index : ');
                } while (Number(trackIndex) >= tracksObj.tracks.length || Number(trackIndex) < 0 && trackIndex !== 'STOP');
                if (trackIndex === 'STOP') { return; }
                tracksObj.tracks.splice(trackIndex, 1)
                Interface.printTracks();

                // SAVE
                saveTrack(tracksURL, tracksObj);
               break;
            case '3':
                // ASK FOR A TRACK
                Interface.printTracks();
                console.log('\n Write "STOP" to cancel everything.');
                let index;
                do {
                    Interface.createInterface();
                    index = await Interface.askInput('Index : ');
                } while (Number(index) >= tracksObj.tracks.length || Number(index) < 0 && index !== 'STOP');
                if (index === 'STOP') { return; }

                console.log(`SELECTED OBJECT : \n`);
                console.log(tracksObj.tracks[index]);
                // ASK FOR A PROPERTY
                let property;
                do {
                    Interface.createInterface();
                    property = await Interface.askInput('Property : ');
                } while (tracksObj.tracks[index][property] === undefined && property !== 'STOP');
                if (property === 'STOP') { return; }

                // ASK FOR A VALUE
                console.log(`Current value : ${tracksObj.tracks[index][property]}`);
                Interface.createInterface();
                let value = await Interface.askInput('New value : ');
                if (value === 'STOP') { return; }
                tracksObj.tracks[index][property] = value;

                // SAVE
                saveTrack(tracksURL, tracksObj);
               break;
            default:
                console.log(`Something went wrong!`);
        }
    }

    return {
        validAnswer,
        manageInput
    }
})();


const main = async () =>  {
    // Print the menu to decide what you want to do.
    /*      while: NO estes pulsando 4 --> repeat.
    *       only accept if 1,2,3
    *
    *  1.   ADD A TRACK
    *  2.   DELETE A TRACK
    *  3.   MODIFY A TRACK
    *  4.   STOP
    * */

    let input;
    Interface.printMenu();
    do  {
        Interface.createInterface();
        input = await Interface.askInput("Your choice:  ");
        if (Logic.validAnswer(input)) {
            Logic.manageInput(input);
            break;
        }
    } while (input !== '4');


    // Wait for an answer.
    // When a valid answer is introduced, but is not 4:
    /*
    *       Case 1 :
    *           Ask track data :
    *               > name                     --> ('name', String)
    *               > cover path               --> ('cover', String)
    *               > release(YYYY/MM/DD)      --> ('release', String)
    *               optional :
    *               > link youtube             --> ('link-youtube', String)
    *               > link soundcloud          --> ('link-soundcloud', String)
    *               > link bandcamp            --> ('link-bandcamp', String)
    *               > link spotify             --> ('link-spotify', String)
    *           ?? Validate data
    *           Create object from data, and add that object to previously created array of objects :
    *               tracks.push(trackObject);
    *           Write the result tracks object into original file.
    *
    *       Case 2 :
    *           Print every track with their index.
    *               0. Succubus
    *               1. Two Roses
    *               ...
    *               X. STOP
    *           Ask for one to delete. If STOP is selected, get back to the menu.
    *                                  If a valid track is selected :
    *                                       Print "Are you sure? Y/N".
    *                                           If 'Y' --> DELETE
    *                                           else   --> STOP
    *           When confirmed : Get the tracks object, tracks.splice(index, 1);
    *
    *       Case 3 :
    *           Print every track with their index.
    *               0. Succubus
    *               1. Two Roses
    *               ...
    *               X. STOP
    *           Ask for one to delete. If STOP is selected, get back to the menu.
    *           Get the tracks object, print tracks[i].
    *           Ask for a property to change. Validate that is exists. If doesnt, ask again.
    *           When exists : Ask for value to interchange.
    *           Copy that object into a new one,
    *               ??? tracks[i][propertyname] = value;
    *                   SI NO :
    *                   let copy = tracks[i]; copy[propertyname] = value; tracks[i] = copy;
    *           Write the result tracks object into original file.
    *
    *
    * */

}
main();

// Saves the Tracks Object (in JSON format) into a specified path.
const saveTrack = (path, content) => {
    fs.writeFile(path, JSON.stringify(content), {flag: 'w+'}, (error) => {
        if (error) { console.log(error); return; }
        console.log("Done!");
    });
}



