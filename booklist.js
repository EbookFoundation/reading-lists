const displayUsingApi = false;
(function ($) {
  if (displayUsingApi) {
    // TODO
    const list = JSON.parse(localStorage.getItem('booklist'))
    console.log(list)
    const body = $('#book-list')

    Object.keys(list).forEach((bookId) => {
      console.log(bookId)
      jQuery.get(`https://www.gutenberg.org/ebooks/${bookId}.opds`, null, (data, status, jqxhr) => { // eslint-disable-line
        // TODO parse
        console.log(data)
        body.html(data)
      }, 'text')
    })
  } else {
    const list = JSON.parse(localStorage.getItem('booklist'))
    console.log(list)
    const body = $('#book-list')

    Object.keys(list).forEach((bookId) => {
      console.log(bookId)
      body.append(makeListItem(list[bookId]))
    })
  }

  function makeListItem(book) {
    const a = `<a href="${book.url}"><h3>${book.title}</h3></a>`
    const li = `<li><div class="list-item"><img src="${book.imgSrc}"/>${a}<span>Author: ${book.author}</span><div></li>`
    console.log(li)
    return li
  }
})(jQuery) // eslint-disable-line
