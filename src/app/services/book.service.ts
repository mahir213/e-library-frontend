import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published_date: '1960-07-11',
        isbn: '9780061120084',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
        description: 'A novel about the serious issues of rape and racial inequality.'
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        published_date: '1949-06-08',
        isbn: '9780451524935',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
        description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.'
      },
      {
        id: 3,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        published_date: '1813-01-28',
        isbn: '9780141040349',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780141040349-L.jpg',
        description: 'A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.'
      },
      {
        id: 4,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        published_date: '1925-04-10',
        isbn: '9780743273565',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780743273565-L.jpg',
        description: 'A novel about the American dream and the roaring twenties.'
      },
      {
        id: 5,
        title: 'Moby-Dick',
        author: 'Herman Melville',
        published_date: '1851-10-18',
        isbn: '9781503280786',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9781503280786-L.jpg',
        description: 'A sailor Ishmael narrates the obsessive quest of Ahab for revenge on Moby Dick.'
      },
      {
        id: 6,
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        published_date: '1869-01-01',
        isbn: '9781853260629',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9781853260629-L.jpg',
        description: 'A historical novel that tells the story of a number of aristocratic families during the Napoleonic Wars.'
      },
      {
        id: 7,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        published_date: '1951-07-16',
        isbn: '9780316769488',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780316769488-L.jpg',
        description: 'A novel about a few days in the life of a troubled teenage boy.'
      },
      {
        id: 8,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        published_date: '1937-09-21',
        isbn: '9780547928227',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780547928227-L.jpg',
        description: 'A fantasy novel and childrens book by J. R. R. Tolkien.'
      },
      {
        id: 9,
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        published_date: '1866-01-01',
        isbn: '9780143058144',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780143058144-L.jpg',
        description: 'A philosophical novel about the mental anguish and moral dilemmas of an impoverished student.'
      },
      {
        id: 10,
        title: 'The Odyssey',
        author: 'Homer',
        published_date: '800-01-01',
        isbn: '9780140268867',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780140268867-L.jpg',
        description: 'An epic poem that tells the story of Odysseuss ten-year struggle to return home.'
      },
      {
        id: 11,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        published_date: '1320-01-01',
        isbn: '9780140448955',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780140448955-L.jpg',
        description: 'An epic poem that describes Dantes journey through Hell, Purgatory, and Paradise.'
      },
      {
        id: 12,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        published_date: '1932-01-01',
        isbn: '9780060850524',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780060850524-L.jpg',
        description: 'A dystopian social science fiction novel and a cautionary tale about the dehumanizing aspects of technological progress.'
      },
      {
        id: 13,
        title: 'The Iliad',
        author: 'Homer',
        published_date: '762-01-01',
        isbn: '9780140275360',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780140275360-L.jpg',
        description: 'An ancient Greek epic poem that tells the story of the Trojan War.'
      },
      {
        id: 14,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        published_date: '1862-01-01',
        isbn: '9780140444308',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780140444308-L.jpg',
        description: 'A historical novel that tells the story of several characters, focusing on the struggles of ex-convict Jean Valjean.'
      },
      {
        id: 15,
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        published_date: '1847-10-16',
        isbn: '9780142437209',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780142437209-L.jpg',
        description: 'A novel that follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester.'
      },
      {
        id: 16,
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        published_date: '1880-01-01',
        isbn: '9780374528379',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780374528379-L.jpg',
        description: 'A philosophical novel that explores deep into the ethical debates of God, free will, and morality.'
      },
      {
        id: 17,
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        published_date: '1847-12-01',
        isbn: '9780141439556',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780141439556-L.jpg',
        description: 'A novel that tells the story of the all-encompassing, passionate, but ultimately doomed love between Catherine Earnshaw and Heathcliff.'
      },
      {
        id: 18,
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        published_date: '1877-01-01',
        isbn: '9780143035008',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780143035008-L.jpg',
        description: 'A novel that tells the story of a tragic love affair between Anna Karenina and Count Vronsky.'
      },
      {
        id: 19,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        published_date: '1605-01-16',
        isbn: '9780060934347',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780060934347-L.jpg',
        description: 'A Spanish novel that tells the story of a nobleman who reads so many chivalric romances that he loses his sanity and decides to become a knight-errant.'
      },
      {
        id: 20,
        title: 'Madame Bovary',
        author: 'Gustave Flaubert',
        published_date: '1856-01-01',
        isbn: '9780140449129',
        cover_image_url: 'http://covers.openlibrary.org/b/isbn/9780140449129-L.jpg',
        description: 'A novel that tells the tragic story of a doctors wife who has adulterous affairs and lives beyond her means.'
      }
    ];
  }
}