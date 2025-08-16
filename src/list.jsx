function List(){
const fruits = ["apple", "orange", "banana", "mango"];
fruits.sort();

const listItems = fruits.map(fruit => <li>{fruit}</li>)
return (<ol>{listItems}</ol>);
}

export default List