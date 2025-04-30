var text = ['STUDENTS', 'STAFFS', 'DEPARTMENT', 'PROGRAM']
var icon = ['fa-solid fa-users', 'fa-solid fa-chalkboard-user', 'fa-solid fa-computer', 'fa-solid fa-user']

document.write(`
    <div class='container text-center bg-color mt-5 p-5'>
        <div class='row'>
            <div class='col-lg-3 col-md-6 col-12'>
                <i class='${icon[0]} fa-2x'></i>
                <h4 id='count1'></h4>
                <h4>${text[0]}</h4>
            </div>
            <div class='col-lg-3 col-md-6 col-12'>
                <i class='${icon[1]} fa-2x'></i>
                <h4 id='count2'></h4>
                <h4>${text[1]}</h4>
            </div>
            <div class='col-lg-3 col-md-6 col-12'>
                <i class='${icon[2]} fa-2x'></i>
                <h4>${text[2]}</h4>
            </div>
            <div class='col-lg-3 col-md-6 col-12'>
                <i class='${icon[3]} fa-2x'></i>
                <h4>${text[3]}</h4>
            </div>
        </div>
    </div>
`)

var count1 = 0;

setInterval(() => {
    if(count1 < 1100){ //  < 1100
        ++count1;
        document.getElementById('count1').innerHTML = count1
    }
}, 1)

var count2 = 0;

setInterval(() => {
    if(count2 < 200){
        ++count2;
        document.getElementById('count2').innerHTML = count2
    }
}, 10)