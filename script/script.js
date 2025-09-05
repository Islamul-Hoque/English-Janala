const createSpan= (arr)=>{
    const htmlSpan = arr.map(el => `<span class="btn bg-[#EDF7FF] rounded-[0.6rem] mr-2">${el} </span>`)
    return htmlSpan.join(' ');
}

const manageSpinner = (status)=>{
    if(status == true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('word-container').classList.add('hidden')
    }
    else{
        document.getElementById('spinner').classList.add('hidden')
        document.getElementById('word-container').classList.remove('hidden')
    }
}


const loadLesson=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data))
}

const removeActive=()=>{
    const lessonBtns = document.querySelectorAll('.lesson-btn')
    lessonBtns.forEach(btn=> btn.classList.remove('active'))
}

const loadLevelWord =(id)=>{
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeActive();  //remove all active class
        const clickBtn = document.getElementById(`lesson-btn-${id}`);
        clickBtn.classList.add('active') //add active class

        displayLevelwords(data.data)
    });
}

const loadWordDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    const res = await fetch(url);
    const details = await res.json();
    displayWordDetails(details.data);
}

const displayWordDetails = (word)=>{
    const detailsContainer = document.getElementById('details-Container')
    detailsContainer.innerHTML = `
        <div class="bg-[#f8f8f8] border-2 border-[#D7E4EF] rounded-[0.7rem] p-4 mb-4 ">
            <div class="mb-4"> <h2 class="font-bold text-2xl">${word.word} (<i class="fa-solid fa-microphone-lines"></i> <span class="font-Bangla">:${word.pronunciation} </span> )</h2> </div>
            <div class="mb-3"> 
                <h2 class="font-semibold text-xl mb-2">Meaning </h2> 
                <p class="font-Bangla">${word.meaning} </p> 
            </div>
            <div class="mb-3"> 
                <h2 class="font-semibold text-xl ">Example </h2> 
                <p class="mt-2">${word.sentence}</p> 
            </div>
            <div> 
                <h2 class="font-semibold text-xl mb-2 font-Bangla">সমার্থক শব্দ গুলো </h2> 
                <div> ${createSpan(word.synonyms)} </div>
            </div>
            </div>
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-primary ">Complete Learning</button>
            </form>
    `
    document.getElementById('Word_modal').showModal();
}


const displayLevelwords=(words)=>{
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    if(words.length == 0){  //Word error handling
        wordContainer.innerHTML = `
        <div class="my-6  text-center rounded-2xl col-span-full font-Bangla">
            <img class="block mx-auto" src="assets/alert-error.png" alt="">
            <p class="mb-4 text-[#79716b]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h3 class="text-4xl font-bold text-black">নেক্সট Lesson এ যান</h3>
        </div>
        `
        manageSpinner(false);
        return 
    }

    words.forEach(word => {  //Main vocabulary card create
        const wordDiv = document.createElement('div');
        wordDiv.innerHTML = `
        <div class="bg-white py-6 px-4 shadow-sm rounded-[0.6rem]">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-[#000000] mb-4">${word.word ? word.word : 'শব্দ পাওয়া যায়নি' }</h3>
                <p class="text-[#000000] font-semibold mb-3">Meaning /Pronunciation</p>
                <p class="text-[#18181B] font-semibold font-Bangla">"${word.meaning ? word.meaning : 'অর্থ পাওয়া যায়নি'} / ${word.pronunciation ? word.pronunciation : 'pronunciation পাওয়া যায়নি' }"</p>
            </div>
            <div class="flex justify-between items-center px-[1rem] mt-4">
                <button onclick="loadWordDetails(${word.id})" class="btn border-none bg-[#1a91ff1a] hover:bg-[#2a83d66e] py-2 rounded-lg"><i class="fa-solid fa-circle-info text-[#374957]"></i></button>
                <button class="btn border-none bg-[#1a91ff1a] hover:bg-[#2a83d66e] py-2 rounded-lg"><i class="fa-solid fa-volume-high text-[#374957]"></i></button>
            </div>
        </div>
        `
        wordContainer.appendChild(wordDiv);
        manageSpinner(false);
    });
    
}

const displayLesson=(lessons)=>{
    const lessonContainer = document.getElementById('Lesson-container');
    lessonContainer.innerHTML = '';
    lessons.forEach(lesson => {
        const lessonBody = document.createElement('div');
        lessonBody.innerHTML = `
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn lesson-btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>lesson-${lesson.level_no}</button>
        `
        lessonContainer.appendChild(lessonBody);

    });
}

loadLesson();
