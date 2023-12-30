const quoteEl = document.getElementById('quote')
const author = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

// USING ASYNC/AWAIT
async function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://api.quotable.io/random', config)

  const data = await res.json()
  console.log(data);
  quoteEl.innerHTML = data.content
  author.innerHTML = '-' + data.author
}