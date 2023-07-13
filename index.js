const faqContainer = document.querySelector('.faq-container');
const questions = document.querySelectorAll('.question');

faqContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('question')) {
    const question = event.target;
    const answer = question.nextElementSibling;
    
    questions.forEach(function (q) {
      if (q !== question) {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      }
    });
    
    question.classList.toggle('active');
    answer.classList.toggle('active');
  }
});












// const questions = document.querySelectorAll('.question');

// Add click event listener to each question
// questions.forEach((question) => {
//   question.addEventListener('click', () => {
//     Get the corresponding answer element
//     const answer = question.nextElementSibling;

//     Toggle the 'active' class to show/hide the answer
//     answer.classList.toggle('active');
//   });
// });