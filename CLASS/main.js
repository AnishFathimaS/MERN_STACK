function fun(){
    var password = document.getElementById('password').value;
    
    var firstLetter = password.charAt(0)

    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    var special_char = [ '!', '@', '#', '$', '%', '&', '^' ];

    if(num.some((a) => firstLetter.includes(a))){
        document.getElementsByTagName('p')[0].style.color = 'red'
    }
    else if(special_char.some((a) => firstLetter.includes(a))){
        document.getElementsByTagName('p')[0].style.color = 'red'
    }
    else if(firstLetter == firstLetter.toUpperCase()){ 
        document.getElementsByTagName('p')[0].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[0].style.color = 'red'
    }

    // Atleast One Number

    if(num.some((a) => password.includes(a))){
        document.getElementsByTagName('p')[1].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[1].style.color = 'red'
    }

    // Atleast One Special Character

    if(special_char.some((a) => password.includes(a))){
        document.getElementsByTagName('p')[2].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[2].style.color = 'red'
    }

    // Minimum 5 characters

    if(password.length >= 5){
        document.getElementsByTagName('p')[3].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[3].style.color = 'red'
    }


    if(password.length == 0){
        // document.getElementsByTagName('p')[0].style.color = 'black'
        // document.getElementsByTagName('p')[1].style.color = 'black'
        // document.getElementsByTagName('p')[2].style.color = 'black'
        // document.getElementsByTagName('p')[3].style.color = 'black'

        document.querySelectorAll('p').forEach((value) => {
            value.style.color = 'black'
        })
    }

}