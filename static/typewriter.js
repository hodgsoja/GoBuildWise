document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("study-quote");
    const text = "A key study from the Small Business & Entrepreneurship Council (SBE Council) found that small business owners using AI save an average of 14.97 hours per week (over 748 hours per year). Employees save an average of 13.06 hours per week.";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    typeWriter();
});
