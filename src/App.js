import "./App.css";
import { RegularList } from "./RegularList";
import { NumberedList } from "./NumberedList";
import { SplitScreen } from "./SplitScreen";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductListItem } from "./product/SmallProductListItem";
import { LargeProductListItem } from "./product/LargeProductListItem";
import { Modal } from "./Modal";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

const LeftHandComponent = ({ name }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>
        Left <div>{name}</div>
      </h1>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <Modal>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </Modal>
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <Modal>
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
      </Modal>
    </>
  );
};

const RightHandComponent = ({ msg }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>
        Right <div>{msg}</div>
      </h1>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="your name" />
      <RightHandComponent msg="split with right wing !" />
    </SplitScreen>
  );
}

export default App;
