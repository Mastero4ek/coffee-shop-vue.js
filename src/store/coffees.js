import { v4 as uuidv4 } from "uuid";

const coffees = {
    state: {
        coffees: [
            {
                id: uuidv4(),
                image: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                country: "Brazil",
                price: 10.73,
            },
            {
                id: uuidv4(),
                image: "coffee-2.jpg",
                name: "Presto Coffee Beans 1kg",
                country: "Brazil",
                price: 15.99,
            },
            {
                id: uuidv4(),
                image: "coffee-3.jpg",
                name: "AROMISTICO Coffee 1kg",
                country: "Kenya",
                price: 6.99,
            },
            {
                id: uuidv4(),
                image: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                country: "Columbia",
                price: 10.73,
            },
            {
                id: uuidv4(),
                image: "coffee-2.jpg",
                name: "Presto Coffee Beans 1kg",
                country: "Brazil",
                price: 15.99,
            },
            {
                id: uuidv4(),
                image: "coffee-3.jpg",
                name: "AROMISTICO Coffee 1kg",
                country: "Kenya",
                price: 6.99,
            },
        ],
    },
    getters: {
        getCoffees(state) {
            return state.coffees
        }
    }
}

export default coffees