document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(
    Array.from(event.target.elements)
      .filter(({ id }) => id)
      .reduce(
        (accumulator, { id, value }) => ({
          ...accumulator,
          ...{ [id]: value },
        }),
        {}
      )
  );
});
