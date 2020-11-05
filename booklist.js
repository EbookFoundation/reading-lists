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
      body.append(makeListItem(bookId, list[bookId]))
    })
  }

  $('.remove-from-booklist').on('click', (event) => {
    const target = $(event.target)
    const bookId = target.parent().attr('id')
    console.log(bookId)
    removeBook(bookId)
    location.reload()
  })

  function removeBook (id) {
    const newlist = JSON.parse(localStorage.getItem('booklist'))
    delete newlist[id]
    localStorage.setItem('booklist', JSON.stringify(newlist))
  }

  function makeListItem (id, book) {
    const a = `<a href="${book.url}"><h3>${book.title}</h3></a>`
    const li = `<li><div id="${id}" class="list-item"><img src="${book.imgSrc}"/>${a}<span>Author: ${book.author}</span>
        <button title="Remove From Booklist" class="remove-from-booklist"
            style="background-color: indianred;">-</button>
    </div></li>`
    return li
  }
})(jQuery) // eslint-disable-line
