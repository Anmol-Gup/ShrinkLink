window.addEventListener('load', () => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
    script.crossorigin = "anonymous"
    script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
})

const error = document.querySelector('.error')
const success = document.querySelector('.success')
const successMsg = document.getElementById('success-msg')
const errorMsg = document.getElementById('error-msg')

const handleSubmit = async (event) => {
    event.preventDefault()

    const url = document.getElementById('url')
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.value })
    })
    const { shortId, error: errormsg } = await response.json()
    url.value = ''

    if (shortId) {
        successMsg.innerHTML = `http://localhost:3000/${shortId}`
        success.classList.remove('d-none')
        success.classList.add('d-flex')
        error.classList.add('d-none')
    }
    else {
        error.classList.remove('d-none')
        error.classList.add('d-flex')
        success.classList.add('d-none')
        errorMsg.innerHTML = `${errormsg}`
    }
}

document.querySelector('form').addEventListener('submit', handleSubmit)

const copyContent = async () => {
    let text = document.getElementById('success-msg').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        // console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

document.querySelector('.clipboard').addEventListener('click', copyContent)


document.querySelector('button[type="reset"]').addEventListener('click', () => {
    success.classList.remove('d-flex')
    success.classList.add('d-none')
})