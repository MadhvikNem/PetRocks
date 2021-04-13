/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyifRwUVRaDhOFrF" }).base("appkkQKSnLlknQkjd");

//get the "rocks" table from the base, select ALL the records, and specify the functions that will receive the data
base("rocks").select({}).eachPage(gotPageOfrocks, gotAllrocks);

// an empty array to hold our book data
const rocks = [];


// callback function that receives our data
function gotPageOfrocks(records, fetchNextPage) {
    console.log("gotPageOfrocks()");
    // add the records from this page to our rocks array
    rocks.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllrocks(err) {
    console.log("gotAllrocks()");

    // report an error, you'd want to do something better than this in production
    if (err) {
        console.log("error loading rocks");
        console.error(err);
        return;
    }

    // call function to show the rocks
    showRocks();








}

function showRocks() {








    console.log("rocks", rocks);


    const buttons = rocks.map((rocks, index) => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.append(humanize(index));

        button.addEventListener('click', () => {
            // transition out other slides, then remove them
            document.querySelectorAll('.slide').forEach((s) => {
                s.classList.remove('show');
                s.addEventListener('transitionend', (event) => {
                    event.target.remove();
                });
            });
            const slide = document.createElement('div');
            slide.classList.add('slide');
            // create rocksContainer, petname, rocksTrait, and imgRocks. you've already done this




            var rocksContainer = document.createElement("div");
            rocksContainer.classList.add("rocks-container");






            var Petname = document.createElement("h2")

            Petname.classList.add("names");

            Petname.innerText = rocks.fields.names;








            var rocksTrait = document.createElement("h2")

            rocksTrait.classList.add("trait");

            rocksTrait.innerText = rocks.fields.trait;









            var imgRocks = document.createElement("img")

            imgRocks.classList.add("image");

            imgRocks.src = rocks.fields.image[0].url;




            // append everything
            rocksContainer.append(Petname, rocksTrait, imgRocks);
            slide.append(rocksContainer);
            const viewer = document.querySelector('.viewer');
            viewer.insertBefore(slide, viewer.firstChild).focus();
            slide.classList.add('show');
        });




        return button;






    });


    document.querySelector('nav').append(...buttons);







}















// function showRocks() {

//     console.log("showRocks()");
//     rocks.forEach((rocks, index => {




//         


//        

//        




//         var Petname = document.createElement("h2")

//         Petname.classList.add("names");

//         Petname.innerText = rocks.fields.names;

//         rocksContainer.append(Petname);




//         var rocksTrait = document.createElement("h2")

//         rocksTrait.classList.add("trait");

//         rocksTrait.innerText = rocks.fields.trait;









//         var imgRocks = document.createElement("img")

//         imgRocks.classList.add("image");

//         imgRocks.src = rocks.fields.image[0].url;










//     }));






// }














// const b = document.getElementById("button");
// b.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s = document.getElementById("slides");
//     s.classList.add("show");

// });

// // this is not DRY!

// const b2 = document.getElementById("button-2");
// b2.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s2 = document.getElementById("slide-2");
//     s2.classList.add("show");
// });

// const b3 = document.getElementById("button-3");
// b3.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s3 = document.getElementById("slide-3");
//     s3.classList.add("show");
// });

// const b4 = document.getElementById("button-4");
// b4.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s4 = document.getElementById("slide-4");
//     s4.classList.add("show");
// });


// const b5 = document.getElementById("button-5");
// b5.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s5 = document.getElementById("slide-5");
//     s5.classList.add("show");
// });


// const b6 = document.getElementById("button-6");
// b6.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s6 = document.getElementById("slide-6");
//     s6.classList.add("show");
// });



// const b7 = document.getElementById("button-7");
// b7.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s7 = document.getElementById("slide-7");
//     s7.classList.add("show");
// });

// const b8 = document.getElementById("button-8");
// b8.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s8 = document.getElementById("slide-8");
//     s8.classList.add("show");
// });


// const b9 = document.getElementById("button-9");
// b9.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s9 = document.getElementById("slide-9");
//     s9.classList.add("show");
// });


// const b10 = document.getElementById("button-10");
// b8.addEventListener("click", () => {
//     slides = document.getElementsByClassName("slide");
//     for (s of slides) {
//         s.classList.remove("show");
//     }
//     const s10 = document.getElementById("slide-10");
//     s10.classList.add("show");
// });




function humanize(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'
    ];

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
        return ones[numString[0]] + ' thousand ' + convert(end);
    }
}