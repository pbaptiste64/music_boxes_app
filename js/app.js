var notes = {
    c: document.querySelector('#cAudio'),
    d: document.querySelector('#dAudio'),
    e: document.querySelector('#eAudio'),
    f: document.querySelector('#fAudio'),
    g: document.querySelector('#gAudio'),
    a: document.querySelector('#aAudio'),
    b: document.querySelector('#bAudio'),
}

function playNote(letter){
   // console.log(letter)
    notes[letter].currentTime = 0;
    notes[letter].play()
}
/*
document.querySelector('#c').addEventListener('click', function(){
    playNote(this.id)
}) 
document.querySelector('#d').addEventListener('click', function(){
    playNote(this.id)
})
document.querySelector('#e').addEventListener('click', function(){
    playNote(this.id)
})
document.querySelector('#f').addEventListener('click', function(){
    playNote(this.id)
})
document.querySelector('#g').addEventListener('click', function(){
    playNote(this.id)
})
document.querySelector('#a').addEventListener('click', function(){
    playNote(this.id)
})
document.querySelector('#b').addEventListener('click', function(){
    playNote(this.id)
})*/

//instead of having so much code, use ".querySelectorAll"

document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', function(){
        playNote(this.id)
    })
})

document.addEventListener('keydown', function(){     
    console.log(event)
    if(event.keyCode === 67){
        playNote('c')
    }

    //console.log("You clicked the C key")


    
    if(event.keyCode === 68){
        playNote('d')
    }
    //console.log("You clicked the D key")


    
    if(event.keyCode === 69){
        playNote('e')
    }
    //console.log("You clicked the E key")


    
    if(event.keyCode === 70){
        playNote('f')
    }
    //console.log("You clicked the F key")


    
    if(event.keyCode === 71){
        playNote('g')
    }
    //console.log("You clicked the G key")



    if(event.keyCode === 65){
        playNote('a')
    }
    //console.log("You clicked the A key")

    
    if(event.keyCode === 66){
        playNote('b')
    }
   // console.log("You clicked the B key")
})
