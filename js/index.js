// Your code goes here
//#1: onload
let bodyrotx = 0;
let spannum = 0;
let never = `We're no strangers to love 
You know the rules and so do I
 A full commitment's what I'm thinking of 
You wouldn't get this from any other guy 
I just wanna tell you how I'm feeling 
Gotta make you understand 
Never gonna give you up 
Never gonna let you down 
Never gonna run around and desert you 
Never gonna make you cry 
Never gonna say goodbye 
Never gonna tell a lie and hurt you 
We've known each other for so long 
Your heart's been aching but you're too shy to say it 
Inside we both know what's been going on 
We know the game and we're gonna play it 
And if you ask me how I'm feeling 
Don't tell me you're too blind to see 
Never gonna give you up 
Never gonna let you down 
Never gonna run around and desert you 
Never gonna make you cry 
Never gonna say goodbye 
Never gonna…`.split(' ');
window.onload = () => {
    document.querySelectorAll('h1, h2, h4, a, p, img').forEach(node => {
        let v = h = 0;
        setInterval(function() {
            let num = Math.ceil(Math.random() * 4);
            switch(num) {
                case 1: v++; break;
                case 2: h++; break;
                case 3: v--; break;
                case 4: h--; break;
            }
            if(v > 50) v = 50;
            if(v < -50) v = -50;
            if(h > 50) h = 50;
            if(h < -50) h = -50;
            node.style.transform = `translate(${h}px,${v}px)`;
        },0)
    })
}
//#9: scroll
window.onscroll = () => {
    bodyrotx++
    let body = document.querySelector('body');
    body.style.transform = `rotateX(${bodyrotx}deg)`;
}
//#10: keydown
document.onkeydown = () => {
    if(!document.querySelector('body')) {
        let html = document.querySelector('html')
        let el = document.createElement('span');
        el.textContent = never[spannum++];
        if(spannum >= never.length) spannum = 0;
        el.style.display = `inline-block`
        el.style.fontSize = `${Math.random() * 100}px`
        el.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        html.append(el);
    };
}
//affect everything
document.querySelectorAll('*').forEach(node => {
    //#2: onmouseover
    node.onmouseover = () => {
        document.querySelectorAll('body, header, footer').forEach(node => {
            node.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        })
    }
    //#3: keydown
    node.addEventListener('keydown', () => {
        if(document.querySelector('body')) node.style.display = 'none'
    })
    //#4: keyup
    node.addEventListener('keyup', () => {
        node.style.display = 'block'
    })
});
//affect bottom tags
document.querySelectorAll('h1, h2, h4, nav, a, p, img').forEach(node => {
    //#5: click
    node.onclick =  (event) => {
        node.style.width = `${Math.random() * 2000}px`;
        node.style.height = `${Math.random() * 2000}px`;
        event.stopPropagation();
    }
    //#6: double-click
    node.ondblclick = (event) => {
        let html = document.querySelector('html');
        while(html.firstChild) html.removeChild(html.firstChild);
        html.textContent = "ALL YOUR DOM ARE BELONG TO US";
        event.stopPropagation();
    }
    //#7: drag
    node.ondrag = (event) => {
        let height = node.offsetHeight;
        height++;
        node.style.height = `${height}px`;
        event.stopPropagation();
    }
    //#8: wheel
    node.onwheel = (event) => {
        let height = node.offsetHeight;
        height--;
        node.style.height = `${height}px`
        event.stopPropagation();
    }
})
document.querySelectorAll('a').forEach(node => {
    node.preventDefault();
})



// document.querySelectorAll('p, a, h1, h2, h3, h4, img, button')
//     .forEach(node => node.onmouseover = () => node.style.visibility = "hidden");