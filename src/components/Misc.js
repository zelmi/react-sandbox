function Misc() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const thingElements = thingsArray.map((thing) => {
    return <p>{thing}</p>;
  });
  function miscButtonClicked() {
    thingsArray.push(`Thing ${thingsArray.length + 1}`);
    console.log(thingsArray)
    greeting("Bob");
  }

  function greeting (name){
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    console.log((`${hours}, ${minute}`));
  }

  return (
    <>
      <div id="misc">
        <button onClick={miscButtonClicked} id="misc_button">
          Add Item
        </button>
        {thingElements}
      </div>
    </>
  );
}

export default Misc;
 