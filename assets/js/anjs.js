
const names = [
    { id: 1, name: "Phattharaphoom Kalayawangsa", school: "โรงเรียน A" },
    { id: 2, name: "นายพิสิษฐ์ ศรีชำนาจ", school: "โรงเรียนกุฉินารายณ์" },
    { id: 3, name: "อนันต์ ขยันดี", school: "โรงเรียน C" },
    { id: 4, name: "ก้องเกียรติ วิริยะ", school: "โรงเรียน D" },
    { id: 5, name: "มัณฑนา ทองแท้", school: "โรงเรียน E" },
    { id: 6, name: "ภาคิน มั่นคง", school: "โรงเรียน F" },
    { id: 7, name: "ศิริพร ใส่ใจ", school: "โรงเรียน G" },
    { id: 8, name: "ธนวัฒน์ ตั้งใจ", school: "โรงเรียน H" },
    { id: 9, name: "ณัฐวุฒิ ใจเด็ด", school: "โรงเรียน I" },
    { id: 10, name: "วิภา รุ่งเรือง", school: "โรงเรียน J" },
    { id: 11, name: "อธิษฐาน พิพัฒน์", school: "โรงเรียน K" },
    { id: 12, name: "ศักดิ์สิทธิ์ ก่อเกียรติ", school: "โรงเรียน L" },
    { id: 13, name: "กนกวรรณ ใจบุญ", school: "โรงเรียน M" },
    { id: 14, name: "ชานนท์ ขำขัน", school: "โรงเรียน N" },
    { id: 15, name: "ปวีณา สุขสำราญ", school: "โรงเรียน O" },
    { id: 16, name: "อารยา เศรษฐี", school: "โรงเรียน P" },
    { id: 17, name: "ยุทธนา ตั้งมั่น", school: "โรงเรียน Q" },
    { id: 18, name: "นภัสสร อ่อนหวาน", school: "โรงเรียน R" },
    { id: 19, name: "ภานุวัฒน์ เด็ดเดี่ยว", school: "โรงเรียน S" },
    { id: 20, name: "ณัฐกานต์ ใจเย็น", school: "โรงเรียน T" },
    { id: 21, name: "วีรศักดิ์ เที่ยงตรง", school: "โรงเรียน U" },
    { id: 22, name: "จิราภรณ์ แสงสว่าง", school: "โรงเรียน V" },
    { id: 23, name: "กฤษณะ นักสู้", school: "โรงเรียน W" },
    { id: 24, name: "สิริพร อ่อนน้อม", school: "โรงเรียน X" },
    { id: 25, name: "พิชญา สงบสุข", school: "โรงเรียน Y" },
    { id: 26, name: "พีรพล ขยันขันแข็ง", school: "โรงเรียน Z" },
    { id: 27, name: "เจนจิรา สุขใจ", school: "โรงเรียน AA" },
    { id: 28, name: "อรรถพล ร่ำรวย", school: "โรงเรียน BB" },
    { id: 29, name: "ธิดารัตน์ ส่องแสง", school: "โรงเรียน CC" },
    { id: 30, name: "ไกรศรี ก้าวหน้า", school: "โรงเรียน DD" },
    { id: 31, name: "มั่นคง ตรงต่อเวลา", school: "โรงเรียน EE" },
    { id: 32, name: "ภาณุเดช มั่นใจ", school: "โรงเรียน FF" },
    { id: 33, name: "สิริวรรณ สุขสบาย", school: "โรงเรียน GG" },
    { id: 34, name: "ณัฐพล ขยันหมั่นเพียร", school: "โรงเรียน HH" },
    { id: 35, name: "ปิยวรรณ มุ่งมั่น", school: "โรงเรียน II" },
    { id: 36, name: "จักรพรรดิ์ ยิ่งใหญ่", school: "โรงเรียน JJ" },
    { id: 37, name: "อนุชา ซื่อสัตย์", school: "โรงเรียน KK" },
    { id: 38, name: "วิลาสินี จริงใจ", school: "โรงเรียน LL" },
    { id: 39, name: "ทรงพล กล้าหาญ", school: "โรงเรียน MM" },
    { id: 40, name: "อรอุมา อ่อนโยน", school: "โรงเรียน NN" }
];

let currentPage = 1;
const perPage = 10;

const nameList = document.getElementById('name-list');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderPage(page) {
    nameList.innerHTML = "";
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageData = names.slice(start, end);

    pageData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${entry.id}</td><td>${entry.name}</td><td>${entry.school}</td>`;
        nameList.appendChild(row);
    });

    prevBtn.classList.toggle("hidden", page === 1);
    nextBtn.classList.toggle("hidden", page === Math.ceil(names.length / perPage));
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    } else {
        window.location.href = "index.html";
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(names.length / perPage)) {
        currentPage++;
        renderPage(currentPage);
    }
});

renderPage(currentPage);
