import React from 'react';
import { Link } from 'react-router-dom';

export function BookGrid({ books }) {

    let bookArray = books.map(book => <BookCard key={book.name} book={book} />)
    return (
        <div className="container">
            <div className="row">
                { bookArray }
            </div>
        </div>
    );
}

export function BookCard({ book }) {
    return(
        <div className="col col-12 col-md-6 col-xl-3 d-flex">
            <div className="card card-book">
                <img className="card-img-top img-fluid book-card-img" src={book.img} alt={book.name} />
                <div className="card-body">
                    <h3 className="card-title">{book.name}</h3>
                    <ul>
                        <li className="card-text">{`Course: ${book.course}`}</li>
                        <li className="card-text">{`Condition: ${book.condition}`}</li>
                        <li className="card-text">{`Price: ${book.price}`}</li>
                        <li className="card-text">{`Seller's contact info: ${book.contact}`}</li>
                    </ul>
                    <Link to='/detail' state={{ book: book }}>More Details</Link>
                </div>
            </div>
        </div>
    );
}