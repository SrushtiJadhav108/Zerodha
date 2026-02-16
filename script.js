const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question =item.querySelector(".faq-question");
    question.addEventListener("click",()=>{
        item.classList.toggle("active");
    });
} );

const emp=document.querySelectorAll(".employee-img");
emp.forEach(BIO=>
{
   const arrow=BIO.querySelector(".bio-arrow");
   arrow.addEventListener("click",()=>
{
    BIO.classList.toggle("active");
});
});
