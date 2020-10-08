(function ($) {

    const list = JSON.parse(localStorage.getItem('booklist'))
    console.log(list)
    const body = $('#book-list');
    console.log()

    Object.keys(list).forEach((bookId) => {
        console.log(bookId)
        body.append(makeListItem(list[bookId]));
    });

    function makeListItem(book) {
        const a = `<a href="${book.url}"><h3>${book.title}</h3></a>`;
        const li = `<li><div class="list-item"><img src="${book.imgSrc}"/>${a}<span>Author: ${book.author}</span><div></li>`;
        console.log(li)
        return li;
    }

})(jQuery);