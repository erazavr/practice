import './App.css';
import Snacks from "../../components/Snacks";
import {Drink, Drinks} from "../../components/Drinks";
import {useState} from "react";

function App() {
    const [orders, setOrders] = useState<Drink[]>([]);

    const click = (order:Drink) => {
        const newOrder = orders.some( orderNew => orderNew.name === order.name );
            if(!newOrder){
                setOrders((prevState)=> [
                    ...prevState,
                    order
                ])
            } else {
                const newOrders = orders.filter(o => o.name !== order.name)
                const findOrder = orders.find(findO => {
                    return  findO.name === order.name
                });

                if (findOrder){
                    findOrder.count++
                    setOrders([
                        ...newOrders,
                        findOrder
                    ])
                }
                console.log(findOrder)
            }
    }

     const removeOrder = (id:string) => {
        const onRemove = orders.filter(remove => remove.id !== id)
         setOrders(onRemove)
     }

     const total = orders.reduce((acc, orderPrice) => {
         return acc + orderPrice.price * orderPrice.count
     }, 0)
  return (
    <div className='block'>
        <div className='order'>
            {orders.map(test => (
                <div key={test.name} className='orders'>
                    <span>{test.name}</span>
                    <p>{test.count}x</p>
                    <p>{test.price}KGS</p>
                    <button onClick={() => removeOrder(test.id)}>X</button>
                </div>
            ))}
            <p>total: {total}</p>
        </div>
        <div className="menu">
            <div>
                <Snacks
                onFoodClick={click}/>
            </div>
            <div>
                <Drinks
                onDrinkClick={click}/>
            </div>
        </div>
    </div>
  );
}

export default App;
