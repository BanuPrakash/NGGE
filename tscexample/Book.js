var Book = /** @class */ (function () {
    function Book(title, amt) {
        this.title = title;
        this.amt = amt;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (name) {
        this.title = name;
    };
    return Book;
}());
