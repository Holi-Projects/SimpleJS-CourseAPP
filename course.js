const name = document.querySelector("#name")
const course = document.querySelector("#course")
const author = document.querySelector("#author")
const submit =  document.querySelector("input[type = submit]")
const alertVal = document.querySelector(".alert")


submit.addEventListener("click", function(){
    
    if(name.value == '' || course.value == '' || author.value == ''){
        alertVal.classList.add("fail")
        alertDisplay()
    } 
    else {
        
        alertVal.classList.add("success")
        alertDisplay()
    }

    
})

function showDis(){
    var rand = Math.floor(Math.random()*13)
    let div = document.createElement('div')
    div.classList.add("cst")
    div.innerHTML = ("<img src='img/" + rand +".jpeg'> <p><b>Name : </b>" + name.value + "</p>" 
    + "<p><b>Course : </b>" + course.value + "</p>" + "<p><b>Author : </b>" 
    + author.value + "</p><br>")
    document.querySelector(".customer").append(div)

    name.value = '', course.value = '', author.value = ''
}

function alertDisplay(){
    if(alertVal.classList.contains("fail")){
        alertVal.style.display = "block"
        alertVal.append("Please enter missing fields (:")
            
        setTimeout(() => {
            alertVal.style.display = 'none'
            alertVal.innerHTML = ''
        }, 3000);
        
        alertVal.classList.remove("fail")
    } 
    else if (alertVal.classList.contains("success")){
        alertVal.style.display = "block"
        alertVal.append("Processing......")
        alertVal.style.backgroundColor = "green"
        //$('#loading').css("visibility", "visible");
        document.querySelector('#loading').style.visibility = "visible"    

        setTimeout(() => {
            alertVal.style.display = 'none'
            alertVal.innerHTML = ''
            alertVal.style.backgroundColor = "#f44336"
            showDis()
           // $('#loading').css("visibility", "hidden");
           document.querySelector('#loading').style.visibility = "hidden"
        }, 3000);
        alertVal.classList.remove("success")
        
    }

    
}

// alertDisplay.prototype.hideSubmit = function (){
//     submit.disabled = true
// }

// alertDisplay.prototype.showSubmit = function (){
//     submit.disabled = false
// }

// document.addEventListener('DOMContentLoaded', function(){
//     const al = new alertDisplay()
//     al.hideSubmit();
// });




//setTimeout(hideLoader, 3000);


// class courses {
//     constructor(name, course, author) {
//         this.name = name
//         this.course = course
//         this.author = author
//     }
// }

// submit.addEventListener("click", function(){
   
//     let c1 = new courses(name.value,course.value,author.value)
//     document.querySelector("#customer-name").innerHTML = c1.name
//     document.querySelector("#customer-course").innerHTML = c1.course
//     document.querySelector("#customer-author").innerHTML = c1.author
    
//     let div = document.createElement('div')
//     div.classList.add("cst")
//     div.innerHTML = ("<p><b>Name : </b>" + c1.name + "</p>" 
//     + "<p><b>Course : </b>" + c1.course + "</p>" + "<p><b>Author : </b>" + c1.author 
//     + "</p><br>")
//     document.querySelector(".customer").append(div)
// })
