
//Advanced typescript
//Utilities
interface Person{
    name: string;
    age: number;
}
let ob: Partial<Person> = { name: "raj" }
let ob2: Required<Person> = { name: "raj", age: 20 }
let ob3: Readonly<Person> = { name: "raj", age: 20 }

type Fruit = "apple" | "banana" | "orange";
const f: Record<Fruit, number> = { apple: 10, banana: 20, orange: 5 };


//3rd jan mrng

interface User
{
    id: number,
    username: string,
    email: string,
    isAdmin:boolean
}
const userDetails: Pick<User, "username" | "email"> = { username: "raj", email: "abc@gmail.com" }
const myDetails: Omit<User, "id" | "isAdmin"> ={ 
	username: "raj",
	email: "abc@gmail.com",
}
//Generics
//.d.ts==>declaration files