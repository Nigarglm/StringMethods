
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Array-dəki ardıcıl cüt ədədləri seçin və yeni bir array-də saxlayın.
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);

// 2. Verilmiş arraydəki ədədləri Fibonacci sırası ilə yeni bir array-də yaratmaq.
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

const fibonacciArray = nums.map(fibonacci);
console.log(fibonacciArray);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      pages: 281,
      language: "English",
      country: "United States",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      pages: 328,
      language: "English",
      country: "United Kingdom",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      pages: 180,
      language: "English",
      country: "United States",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      pages: 279,
      language: "English",
      country: "United Kingdom",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      pages: 277,
      language: "English",
      country: "United States",
    }
  ];


// TASK.3.
const sortedBooksForLength = books.sort((a, b) => b.title.length - a.title.length);
console.log(sortedBooksForLength);

// TASK.4.
const sortedBooksForYear = books.sort((a, b) => a.year - b.year);
console.log(sortedBooksForYear);

// TASK.5.
const Years = books.map(book => {
    if (book.year % 2 === 0) {
        return book.year;
    } else {
        return Math.ceil(book.year / 10) * 10; 
    }
});

console.log(Years);

// TASK.6.
const findLargestWord = (string) => {
    const words = string.split(" ");
    let largestWord = "";

    for (const word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }

    return largestWord.split("").reverse().join("");
};

const string = "Hello , My name is Nigar";
console.log(findLargestWord(string));

// TASK.7.
const sum = (string) => {
    let sum = 0;
    for (const char of string) {
        const num = parseInt(char);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
};

const numbers = "123abc456def";
console.log(sum(numbers));

// TASK.8.

// TASK.9.
const lengthOfLongestWord = (string) => {
    const words = string.split(" ");
    let longestLength = 0;

    for (const word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
};

const text = "Mən code academydə təhsil alıram.";
console.log(lengthOfLongestWord(text));