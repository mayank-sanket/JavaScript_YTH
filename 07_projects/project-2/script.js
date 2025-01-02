const form = document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault() // to stop it from submitting 

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector('#results')

    if(height < 0 || height == '' || isNaN(height)){
        results.innerHTML = "Please enter a valid height!"
    }
    else if(weight < 0 || weight == '' || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight!"
    }
    else{
       const bmi =  (weight /((height*height)/10000)).toFixed(2)
       results.innerHTML = `<span>${bmi}</span>`
    }


})

