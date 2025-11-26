<h1 class="myH1">Hello world</h1>;//კლასიკური HTML ის class არ იმუშავებს react ში.
<h1 className="myH1">Hello world</h1>;//იმუშავებს რადგან react ში class იცვლება className ით.

<p class="myParagraph">How are world</p>;//არასწორია
<p className="myParagraph">How are world</p>;//სწორია

<div class="myDiv">Bye world</div>;//არასწორია
<div className="myDiv">Bye world</div>;//სწორია

<img src="" alt="" />//self closing

const math = <p>{1+2}</p>;
const math2 = <p>{1*2}</p>;
const math3 = <p>{2-1}</p>;
const math4 = <p>{2000/1000}</p>;
const math5 = <p>{9**2}</p>;

const message="Hello world again!!!";
const messagesent = <p>{message}</p>;

const dogimg={
    dog:"https://bebusinessed.com/wp-content/uploads/2014/03/734899052_13956580111.jpg"
}
const dogsent = <img src={dog}/>

