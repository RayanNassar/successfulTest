import basic from "./basic.js"
let historyArray = []

const Router = {
    init: () => {

        let hrefState = window.location.pathname
        Router.go(hrefState)

        document.querySelectorAll('.linkI').forEach(H => {

            H.addEventListener('click', A => {
                A.preventDefault();
                let link = A.target.getAttribute('href');
                Router.go(link)

            })

        })
        window.addEventListener('popstate', () => {
            let length = historyArray.length - 2
            Router.go(historyArray[length]);
            historyArray.pop()
            historyArray.pop()
        })

    },
    go: (link, historyPug = false) => {

        if (link == '/calculator.html') {
            history.pushState('', '', 'background')
            link = '/background'
        }
        else {
            history.pushState('', '', link)
        }

        historyArray.push(link)

        switch (link) {

            case '/background':

                // document.querySelectorAll('.container ,.imagePhoto').forEach(H => {
                //     H.style.display = 'flex'
                // })

                let backgroundCssFile = document.createElement('link');
                backgroundCssFile.rel = 'styleSheet';
                backgroundCssFile.classList.add('backgroundCssFile')
                backgroundCssFile.href = 'background.css';
                document.head.append(backgroundCssFile)

                let imagePhoto = document.createElement('div');
                imagePhoto.classList.add('imagePhoto')
                document.body.append(imagePhoto)

                if (document.querySelector('.basicCssFile')) {
                    document.querySelector('.basicCssFile').remove()
                }

                document.querySelector('.calculator').style.border = '1px solid rgb(255, 255, 255, 0.4)'

                break;

            case '/basic':
            
                basic()

                break;

        }


    }

}

export default Router