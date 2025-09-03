const loadLesson=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>displayLesson(json.data))
}

const displayLesson=(lessons)=>{
    const lessonContainer = document.getElementById('Lesson-container');
    lessonContainer.innerHTML = '';
    lessons.forEach(lesson => {
        const lessonBody = document.createElement('div');
        lessonBody.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>lesson-${lesson.level_no}</button>
        `
        lessonContainer.appendChild(lessonBody);

    });
}
loadLesson();