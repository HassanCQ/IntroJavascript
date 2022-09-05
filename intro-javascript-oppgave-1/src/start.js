import "./styles.css";

const dummyTekst =
  "Cupcake ipsum dolor sit amet icing lollipop biscuit candy. Icing pastry I love lollipop croissant jelly-o. I love lollipop I love marshmallow brownie carrot cake toffee. I love croissant cheesecake candy toffee chocolate cake candy bonbon. Sweet danish cake cotton candy I love. Dessert sesame snaps caramels danish marzipan. ";

const finnLengsteOrd = () => {
  const tekstSomArray = dummyTekst.split(" ");

  let finnLengsteOrd = tekstSomArray[0];

  tekstSomArray.forEach((ord) => {
    if (ord.length > finnLengsteOrd.length) {
      finnLengsteOrd = ord;
    }
  });
  return finnLengsteOrd;
};

console.log(finnLengsteOrd());
