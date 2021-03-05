

window.onload = function() {

  const addbtn = document.getElementById('add-to-booklist')

  const currentList = JSON.parse(localStorage.getItem('booklist'))

  if (currentList && currentList[bookId]) {
    // book already in list
    addbtn.innerHTML = '-'
    addbtn.setAttribute('title', 'Remove book from My Book List')
    addbtn.setAttribute('style', 'background-color: indianred;')
    addbtn.classList.add('book-in-list')
  }

  addbtn.onclick = function () {
    if(addbtn.classList.contains('book-in-list')){
      removeBook()
      return
    }
    try{
      const bookData = getBookMetadata();
      const newList = { ...JSON.parse(localStorage.getItem('booklist')) }
      newList[bookId] = bookData

      addbtn.classList.add('book-in-list')
      addbtn.innerHTML = '-'
      addbtn.setAttribute('title', 'Remove book from My Book List')
      addbtn.setAttribute('style', 'background-color: indianred;')

      localStorage.setItem('booklist', JSON.stringify(newList))
      console.log(localStorage.getItem('booklist'))
    }
    catch(err){
      console.log('Error adding book', err)
    }
    
  }

  function removeBook () {
    const newlist = JSON.parse(localStorage.getItem('booklist'))
    delete newlist[bookId]
    localStorage.setItem('booklist', JSON.stringify(newlist))
    console.log(localStorage.getItem('booklist'))
    addbtn.classList.remove('book-in-list')
    addbtn.innerHTML = '+'
    addbtn.setAttribute('title', 'Add book to My Book List')
    addbtn.setAttribute('style', 'background-color: cornflowerblue;')
  }


}

