function basic() {

    let basicCssFile = document.createElement('link');
    basicCssFile.rel = 'styleSheet';
    basicCssFile.href = 'basic.css';
    basicCssFile.classList.add('basicCssFile');
    document.head.append(basicCssFile);

    document.querySelectorAll('.rowII, .rowIII, .rowIV').forEach(H => {

        // console.log(Number(H.innerHTML))

        if (!isNaN(Number(H.innerHTML))) {

            H.style.backgroundColor = 'black';

        }

    })

    document.querySelectorAll('.rowsV').forEach(H=>{

        H.style.backgroundColor = 'black'

    })

    // console.log(document.querySelectorAll('.rowsV')[3].innerHTML)
    document.querySelectorAll('.rowsV')[3].style.backgroundColor = '#6ad439'


    document.querySelector('.calculator').style.border = '1px solid black'

    document.querySelector('.backgroundCssFile').remove()

    document.querySelector('.imagePhoto').remove()



}

export default basic