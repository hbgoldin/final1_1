import React from 'react';

import Fire from "../fire";

function Store() {

    const [items, setItems] = React.useState([]);

    // const [submit, setSubmit]=React.useState(true);
    // const [form, setForm] = React.useState({
    //     name: "",
    //     stock: "",
    //     price: "",
    //     img:""
    // });

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

    // const handleChange = prop => event => {
    //     setForm({
    //         ...form,
    //         [prop]:event.target.value
    //         // ... carries over info from form
    //     })
    // };

    // const handleSubmit = ()=>{
    //     db.collection("items").add(form).then(()=> {
    //         setForm({
    //             name: "",
    //             stock: "",
    //             price: "",
    //             img:""
    //         });
    //         setSubmit(!submit)
    //     });
    // }

    // const handleDelete=(id)=>{
    //     db.collection("items").doc(id).delete().then(()=>{
    //         setSubmit(!submit);
    //     });
    // }








    const itemEle = items.map((itm, idx) =>
        <div  key={idx}  className={itm.stock <= 10 ? "underTen" : "overTen"}>
            <div onClick={() => alert(itm.name + "\nIn Stock: " + itm.stock + "\nPrice: " + itm.stock) }>
                <h2>{itm.name}</h2>
                <p>In Stock: {itm.stock}</p>
                <p>Price: ${itm.price}</p>
                <img style={{width:"200px"}} src={itm.img} alt="product"/>
            </div>
            <button  className={itm.stock <= 0 ? "noStock" : "hasStock"} >Add to Cart</button>

        </div>
    );




    const itemStyle = {
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-evenly",

    }

    const itemWrap = {
        marginLeft:"auto",
        marginRight:"auto",
        display: "block",
        width:"80%"
    }


//    const overTen = {
// backgroundColor:"red"
//    }
//
//    const underTen = {
//         backgroundColor: "blue"
//    }










    return (
        <div style={itemWrap}>
            <h1>The Fireplace Place</h1>
            <div style={itemStyle} >
                {itemEle}
            </div>






            {/*<input type="text" placeholder={"Name..."} onChange={handleChange("name")} />*/}
            {/*<input type="text" placeholder={"Stock..."} onChange={handleChange("stock")} />*/}
            {/*<input type="text" placeholder={"price..."} onChange={handleChange("price")} />*/}
            {/*/!*<h1>{form.name} {form.stock} {form.price}</h1>*!/*/}
            {/*<button onClick={handleSubmit} >Submit</button>*/}

        </div>
    );
}

export default Store;