import "./style.css";

const reportBody = document.querySelector(".report__tbody");
const getReport = document.querySelector(".button");

const students = [
  {
    id: 0,
    name: "Чиликин",
  },
  {
    id: 1,
    name: "Беспалов",
  },
  {
    id: 2,
    name: "Ширин",
  },
  {
    id: 3,
    name: "Ковшар",
  },
  {
    id: 4,
    name: "Жалдак",
  },
  {
    id: 5,
    name: "Поляков",
  },
  {
    id: 6,
    name: "Рыбникова",
  },
  {
    id: 7,
    name: "Сахаров",
  },
  {
    id: 8,
    name: "Пушкин",
  },
  {
    id: 9,
    name: "Кузнецов",
  },
  {
    id: 10,
    name: "Демидов",
  },
  {
    id: 11,
    name: "Дьяченко",
  },
  {
    id: 12,
    name: "Котельников",
  },
  {
    id: 13,
    name: "Фаустов",
  },
  {
    id: 14,
    name: "Попов",
  },
  {
    id: 15,
    name: "Милютин",
  },
  {
    id: 16,
    name: "Романцев",
  },
  {
    id: 17,
    name: "Хоменко",
  },
  {
    id: 18,
    name: "Кочетова",
  },
  {
    id: 19,
    name: "Макрушина",
  },
  {
    id: 20,
    name: "Тихонова",
  },
];

let here = [];

function addOrRemoveStudentHere(id) {
  here.includes(id)
    ? (here = here.filter((studentId) => studentId != id))
    : here.push(id);
}

function drawReport() {
  const str =
    here.length < students.length
      ? `
    Отсутствуют:

    ${students
      .filter((student) => !here.includes(student.id))
      .map((item) => `- ${item.name}\n\n`)
      .join("")}
    `
      : "Присутствуют все";

  navigator.clipboard.writeText(str.trim());

  alert("Скопировано");
}

function list(students) {
  reportBody.innerHTML = "";

  students.forEach((item) => {
    const tr = document.createElement("tr");

    tr.className = "report__tr";

    tr.innerHTML = `
        <td class="report__td report__td_name">
            ${item.name}
        </td>
        <td class="report__td report__td_here">
            <input class="report__here" type="checkbox" data-id="${item.id}"/>              
        </td>
          `;

    reportBody.appendChild(tr);

    const checkbox = tr.querySelector(".report__here");

    checkbox.addEventListener("change", (event) => {
      addOrRemoveStudentHere(event.target.dataset.id);
    });
  });
}

list(students);
getReport.addEventListener("click", () => drawReport());
