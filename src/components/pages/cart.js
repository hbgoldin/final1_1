import React from 'react';
import Fire from "../fire";


function Cart() {

    const [items, setItems] = React.useState([]);


    const db = Fire.firestore();

    React.useEffect(() => {
        let newItems = [];

        db.collection("items").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                const obj = doc.data();
                let item = {
                    id: doc.id,
                    name: obj.name,
                    stock: obj.stock,
                    price: obj.price,
                    img: obj.img
                };
                newItems.push(item);
            });
            setItems(newItems)
        });


    }, [db]);


    const itemEle = items.map((itm, idx) =>
        <div key={idx}>
            <div style={{marginBottom: "20px", fontSize: "28px"}}>
                <span style={{fontWeight: "bold"}}>{itm.name} </span> - - - - - -
                Price: ${itm.price}
                <span  className={itm.stock <= 10 ? "lowStock" : "highStock"} > (Low Stock!!!)</span>
            </div>

        </div>
    );


    const itemStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "left"

    }

    const itemWrap = {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: "50%",
    }

    const totalStyle={
        fontSize:"28px",
        fontWeight:"bold",
        textAlign: "right"
    }


    const scores = [475,300,550,400];
    // const scores = items.map((itm, idx) =>
    // <div key={idx}>
    //     {itm.price}
    // </div>
    // );
    const totalScores = scores.reduce(
        (previousScore, currentScore, index)=>previousScore+currentScore,
        0);



  const purchaseAlert = () => {
      alert('Thanks for your purchase!');
      window.location = '/';
  }


    return (
        <div style={itemWrap}>
            <h1>Your Cart</h1>
            <div style={itemStyle}>
                {itemEle}
                <span style={totalStyle}>Total: ${totalScores}</span>
                <button onClick={purchaseAlert} >Purchase</button>

            </div>
        </div>
    );
}

export default Cart;