import Search from "./Search";
import Transactions from "./Transactions";
import Form from "./Form";

function Body() {
  return (
    <>
      <div className="p-3 m-0 border-0 bd-example m-0 border-0 body">
        <Search />
        <Transactions />
        <Form />
      </div>
    </>
  );
}

export default Body;
