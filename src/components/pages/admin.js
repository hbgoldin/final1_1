import React from 'react';
import Fire from "../fire";

function Admin() {

    const [items, setItems] = React.useState([]);
    const [submit, setSubmit]=React.useState(true);
    const [form, setForm] = React.useState({
        name: "",
        stock: "",
        price: "",
        img:""
    });
    const db = Fire.firestore();

    React.useEffect(() => {
        let newItems = [];

        db.collection("items").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                const obj = doc.data();
                let item = {
                    id:doc.id,
                    name: obj.name,
                    stock: obj.stock,
                    price: obj.price,
                    img: obj.img
                };
                newItems.push(item);
            });
            setItems(newItems)
        });


    }, [db, submit]);

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]:event.target.value
            // ... carries over info from form
        })
    };

    const handleSubmit = ()=>{
        db.collection("items").add(form).then(()=> {
            setForm({
                name: "",
                stock: "",
                price: "",
                img:""
            });
            setSubmit(!submit)
        });
    }

    // const handleDelete=(id)=>{
    //     db.collection("items").doc(id).delete().then(()=>{
    //         setSubmit(!submit);
    //     });
    // }

    const itemEle = items.map((itm, idx) =>
        <div key={idx}  className={itm.stock <= 10 ? "underTen" : "overTen"}>
        {/*<div key={idx}   className={itm.stock <= 10 ? "underTen" : "overTen"}>*/}
            <div>
                <h2>{itm.name}</h2>
                <p>In Stock: {itm.stock}</p>
                <p>Price: ${itm.price}</p>
                <img style={{width:"200px"}} src={itm.img} alt="product"/>
            </div>

        </div>
    );

    const itemStyle = {
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }

    const itemWrap = {
        marginLeft:"auto",
        marginRight:"auto",
        display: "block",
        width:"80%"
    }

    const inputStyle = {
        margin:"5px"
    }


    return (
        <div style={itemWrap}>
            <h1>Input information below to add new items to store:</h1>
            <input style={inputStyle} type="text" placeholder={"Item Name..."} onChange={handleChange("name")} />
            <input style={inputStyle} type="text" placeholder={"Stock Amount..."} onChange={handleChange("stock")} />
            <input style={inputStyle} type="text" placeholder={"Price..."} onChange={handleChange("price")} />
            <input style={inputStyle} type="text" placeholder={"Image URL..."} onChange={handleChange("img")} />

            <button onClick={handleSubmit} >Submit</button>

            <h2>Current Items</h2>
            <div style={itemStyle}>
                {itemEle}
            </div>

        </div>
    )
}

export default Admin;