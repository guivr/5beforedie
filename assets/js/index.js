var app6 = new Vue({
  el: '#app',
  data: {
    lists: [
      {
        person: {
          name: 'Elon Musk',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zl-i_lOiOdqJdoW2HsmXDtY3OXLhrx50JUw_LZbdsd81geDH',
        },
        title: 'Elon Musk: 5 books about the future that everyone should read',
        books: [
          {
            name: 'Structures',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51k5L9vtIbL._SX330_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Superintelligence',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51xiCuJ7VML._SX326_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=nick+bostrom&qid=1522437349&sr=1-1&ref=sr_1_1'
          },
          {
            name: 'Our Final Invention',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41ozMLdzJHL._SX334_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Life 3.0',
            img: 'https://images-na.ssl-images-amazon.com/images/I/413jwl4YU-L._SX337_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Zero to One',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41puRJbtwkL._SX331_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
        ]
      },
      {
        person: {
          name: 'Elon Musk',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zl-i_lOiOdqJdoW2HsmXDtY3OXLhrx50JUw_LZbdsd81geDH',
        },
        title: 'Elon Musk: 5 books about the future that everyone should read',
        books: [
          {
            name: 'Structures',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51k5L9vtIbL._SX330_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Superintelligence',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51xiCuJ7VML._SX326_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=nick+bostrom&qid=1522437349&sr=1-1&ref=sr_1_1'
          },
          {
            name: 'Our Final Invention',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41ozMLdzJHL._SX334_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Life 3.0',
            img: 'https://images-na.ssl-images-amazon.com/images/I/413jwl4YU-L._SX337_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Zero to One',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41puRJbtwkL._SX331_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
        ]
      },
      {
        person: {
          name: 'Elon Musk',
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zl-i_lOiOdqJdoW2HsmXDtY3OXLhrx50JUw_LZbdsd81geDH',
        },
        title: 'Elon Musk: 5 books about the future that everyone should read',
        books: [
          {
            name: 'Structures',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51k5L9vtIbL._SX330_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Superintelligence',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51xiCuJ7VML._SX326_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=nick+bostrom&qid=1522437349&sr=1-1&ref=sr_1_1'
          },
          {
            name: 'Our Final Invention',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41ozMLdzJHL._SX334_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Life 3.0',
            img: 'https://images-na.ssl-images-amazon.com/images/I/413jwl4YU-L._SX337_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
          {
            name: 'Zero to One',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41puRJbtwkL._SX331_BO1,204,203,200_.jpg',
            url: 'https://www.amazon.com.br/Structures-Things-Dont-Fall-Down/dp/0306812835?keywords=j.+e.+gordon&qid=1522437264&sr=8-1&ref=sr_1_1'
          },
        ]
      }
    ]
  }
})