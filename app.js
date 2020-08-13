document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#btn-uppercase').addEventListener('click', function(){
        let text = document.querySelector('#text').value;

        document.querySelector('#result').innerHTML = upper(text);
    })
    
    document.querySelector('#btn-lowercase').addEventListener('click', function(){
        let text = document.querySelector('#text').value;

        document.querySelector('#result').innerHTML = lower(text);
    })

    document.querySelector('#btn-firstletterupercase').addEventListener('click', function(){
        let text = document.querySelector('#text').value;

        document.querySelector('#result').innerHTML = titleize(text);
    })

    function upper(text){
        return text.toUpperCase();
    }

    function lower(text){
        return text.toLowerCase();
    }

    function titleize(text) {
        var loweredText = text.toLowerCase();
        var words = loweredText.split(" ");
        for (var a = 0; a < words.length; a++) {
            var w = words[a];
    
            var firstLetter = w[0];
    
            if( w.length > 1){ 
               w = firstLetter.toUpperCase() + w.slice(1);
            } else {
               w = firstLetter + w.slice(1);
            }
    
            words[a] = w;
        }
        return words.join(" ");
    }

})