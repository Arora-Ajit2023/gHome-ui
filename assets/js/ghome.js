// @ts-nocheck
const cardData = [
  {
    id: 0,
    name: "Gmail",
  },
  {
    id: 1,
    name: "Gmail",
  },
  {
    id: 2,
    name: "Gmail",
  },
  {
    id: 3,
    name: "Gmail",
  },
  {
    id: 4,
    name: "Gmail",
  },
  {
    id: 5,
    name: "Gmail",
  },
  {
    id: 6,
    name: "Gmail",
  },
];

const card = document.getElementById("card-body");
let cardContaint = "";
cardData.forEach((value) => {
  cardContaint =
    cardContaint +
    `
    <div class='card'title=${value.name}>
      <div>
      <h3 >${value.id}</h3>
      <p>${value.name}</p>
      </div>
    </div>
    `;
});

card.innerHTML = cardContaint;
