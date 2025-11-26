<h1 class="myH1">Hello world</h1>;//კლასიკური HTML ის class არ იმუშავებს react ში.
<h1 className="myH1">Hello world</h1>;//იმუშავებს რადგან react ში class იცვლება className ით.

<p class="myParagraph">How are world</p>;//არასწორია
<p className="myParagraph">How are world</p>;//სწორია

<div class="myDiv">Bye world</div>;//არასწორია
<div className="myDiv">Bye world</div>;//სწორია


//self closing tag არის ისეთი თაგი რომელსაც არ სჭირდება დამხურავი თაგი მაგალითად </p> და ერთად არის დამხურავი და გამხსნელი თაგები
<img src="https://i.pinimg.com/originals/87/47/af/8747aff07f362662e033d31b236e6c5c.jpg" alt="" />;//self closing
<img src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/2-a4.jpg" alt="" />;
<img src="https://i2.wp.com/printables.space/files/uploads/download-and-print/large-printable-numbers/3-a4.jpg" alt="" />;
<img src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/4-a4-1200x1697.jpg" alt="" />;
<img src="https://i.pinimg.com/736x/9e/d1/9d/9ed19da9442a89d96c21d45fcd7b5a90.jpg" alt="" />;
<img src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/6-a4.jpg" alt="" />;
<img src="https://i.pinimg.com/originals/ab/67/97/ab67978aa74ef7b4378c5745d62a3da5.jpg" alt="" />;
<img src="https://clipart-library.com/2024/number-8/number-8-1.jpg" alt="" />;
<img src="https://tse4.mm.bing.net/th/id/OIP.YTnwG3N0DyCQzy87Wy02EwHaId?pid=Api&P=0&h=220" alt="" />;
<img src="https://cdn.slidesharecdn.com/ss_thumbnails/10-100512124958-phpapp01-thumbnail-4.jpg?cb=1273668607" alt="" />


//react ში თუ მათემატიკურ მოქმედებას დავწერთ {} გარეშე გამოიტანს რაც წერია პრჭყალების ქვემოთ იმას გამოიტანს
//მაგრამ თუ ჩავწერთ {} ში გამოიტანს ამოცანის შედწეგს.
const math = <p>{1+2}</p>;
const math2 = <p>{1*2}</p>;
const math3 = <p>{2-1}</p>;
const math4 = <p>{2000/1000}</p>;
const math5 = <p>{9**2}</p>;
const math6 = <p>{4/2}</p>;
const math7 = <p>{10+10}</p>;
const math8 = <p>{10-10}</p>;
const math9 = <p>{3*3}</p>;
const math10 = <p>{6**100}</p>;

//variable ის გამოყენებით jsx ში შეგვიძლია შევინახოთ ფოტოს ბმული ან ტექსტი და მივანიჭოთ სახელი
// შემდეგ შეგვიძლია ამ ბმულის ან ტექსტის მაგივრად ჩავწეროთ მიცემული სახელი.
const message="Hello world again!!!";
const messagesent = <p>{message}</p>;

const dogimg={
    dog:"https://bebusinessed.com/wp-content/uploads/2014/03/734899052_13956580111.jpg"
}
const dogsent = <img src={dog}/>

const message2="This is dog";
const messagesent2 = <p>{message2}</p>;

