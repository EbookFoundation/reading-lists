(function ($) {
  const addbtn = $('#add-to-booklist')
  const url = window.location && window.location.toString().split('/')
  const bookId = url[url.length - 1].match(/(\d+)/)[0]

  const currentList = JSON.parse(localStorage.getItem('booklist'))
  if (currentList && currentList[bookId]) {
    // book already in list
    addbtn.html('-')
    addbtn.attr('title', 'Remove book from My Book List')
    addbtn.css('background-color', 'indianred')
    addbtn.addClass('book-in-list')
  }

  addbtn.on('click', function (event) {
    if (addbtn.hasClass('book-in-list')) {
      removeBook()
      return
    }
    // add book to list
    let author = ''
    $('tbody>tr').each(function (index) {
      const row = $(this)
      const rowTitle = row.find('th:first').html()
      if (rowTitle === 'Author') {
        const tableRow = row.find('td:first')
        author = tableRow.find('a:first').html()
      }
    })
    const bookData = {
      title: $('h1').html(),
      bookId: bookId,
      imgSrc: $('img.cover-art').attr('src'),
      author: author,
      url: window.location.href
    }

    const newList = { ...JSON.parse(localStorage.getItem('booklist')) }
    newList[bookId] = bookData
    addbtn.addClass('book-in-list')
    addbtn.html('-')
    addbtn.attr('title', 'Remove book from My Book List')
    addbtn.css('background-color', 'indianred')

    localStorage.setItem('booklist', JSON.stringify(newList))
    console.log(localStorage.getItem('booklist'))
  })

  function removeBook() {
    const newlist = JSON.parse(localStorage.getItem('booklist'))
    delete newlist[bookId]
    localStorage.setItem('booklist', JSON.stringify(newlist))
    console.log(localStorage.getItem('booklist'))
    addbtn.removeClass('book-in-list')
    addbtn.html('+')
    addbtn.attr('title', 'Add book to My Book List')
    addbtn.css('background-color', 'cornflowerblue')
  }
})(jQuery) // eslint-disable-line
