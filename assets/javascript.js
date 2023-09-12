//for nev-bar active
    let nav = document.querySelector(".navigation-wrap");
    window.onscroll = function (){
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("scroll-on");
        } else
        {
            nav.classList.remove("scroll-on");
        }
    }
//for nav hide

let navbar = document.querySelectorAll(".nav-link");

//counter design
document.addEventListener("DOMContentLoaded" , () =>{
    function counter(id, start, end, duration)
    {
        let obj= document.getElementById('id'),
        current = start,
        range = end - start, 
        increment = end > start ? 1 : -1,
        math= Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => 
        {
            current += increment;
            obj.textContent = current;
            if(current == end)
            {
                clearInterval(timer)
            }
        }, stop);
    }
    counter(counter1, 0, 500, 300);
    counter(counter1, 100, 900, 500);
    counter(counter1, 300, 1000, 800);
    counter(counter1, 500, 1200, 900);
}
)