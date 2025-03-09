
const names = [
    { id: 1, name: "นายภานุสรณ์ สวนสมบูรณ์", school: "สารวิทยา" },
{ id: 2, name: "นายอติเทพ ชูวงษ์", school: "บางละมุง" },
{ id: 3, name: "นายศุภวัฒน์ นันทดี", school: "สาธิตมหาวิทยาลัยรามคำแหง(ฝ่ายมัธยม)" },
{ id: 4, name: "นายธีรดนย์ วรรณคร", school: "กรรณสูตศึกษาลัย" },
{ id: 5, name: "นายชยณัฐ รัชนีภรณ์ ", school: "พนมสารคาม(พนมอดุลวิทยา)" },
{ id: 6, name: "นายวริศ อิ่มอาเทศ", school: "เตรียมอุดมศึกษา" },
{ id: 7, name: "นายปีติภูม จั่นแก้ว", school: "ชลราษฎรอำรุง" },
{ id: 8, name: "นายญาณกันต์ บุตรนาค", school: "สารสาสน์เอกตรา" },
{ id: 9, name: "นายปัณณทัต อุ่นศิวิไลย์", school: "ขอนแก่นวิทยายน" },
{ id: 10, name: "นายธนพงศ์ วรรณทา", school: "กุฉินารายณ์" },
{ id: 11, name: "นายณัฐวรรธน์ หอมจันทร์", school: "ร้อยเอ็ดวิทยาลัย" },
{ id: 12, name: "นายพัฒนศักดิ์ ไกรดวง", school: "กัลยาณวัตร" },
{ id: 13, name: "นายพสิษฐ์ ปากเมย", school: "หนองบัวพิทยาคาร" },
{ id: 14, name: "นายอัมรินทร์ ไกรจันทร์", school: "ศรีบุญเรืองวิทยาคาร" },
{ id: 15, name: "นายคชาชาติ บุญนอก", school: "อุดรพิทยานุกูล" },
{ id: 16, name: "นายนิธิกร แสงสุข", school: "ขอนแก่นวิทยายน" },
{ id: 17, name: "นายเนติวิทย์ ไหวพริบ", school: "หนองบัวพิทยาคาร" },
{ id: 18, name: "นายธีธัช บัวพรม", school: "สกลราชวิทยานุกูล" },
{ id: 19, name: "นายอัครวัฒน์ จิตติพร", school: "อุดรพิทยานุกูล" },
{ id: 20, name: "นายชลกฤษ หนูตอ", school: "คำเเสนวิทยาสรรค์" },
{ id: 21, name: "นางสาวปัณณธร โสภาวรรณ", school: "มัธยมประชานิเวศน์" },
{ id: 22, name: "นางสาวณัฐนันท์ วัฒนา", school: "กาญจนานุเคราะห์" },
{ id: 23, name: "นางสาวนิมมิดา รุณจักร", school: "ศึกษานารี" },
{ id: 24, name: "นางสาวศศิกานต์ ดวงจันทร์", school: "วัดป่าประดู่" },
{ id: 25, name: "นางสาวชญานิศ ทัศนวงค์", school: "ทุ่งขลาพิทยา \"กรุงไทยอนุเคราะห์\"" },
{ id: 26, name: "นางสาวอมลวรรณ แสนปัญญา", school: "อุตรดิตถ์" },
{ id: 27, name: "นางสาวสุกัลญา มะโนมัย", school: "บางปะกอกวิทยาคม" },
{ id: 28, name: "นางสาวฟาติณี ละสุสะมา", school: "ราชวินิตบางแก้ว" },
{ id: 29, name: "นางสาวฐรินดา อรุณเมือง", school: "สุรนารีวิทยา" },
{ id: 30, name: "นางสาวกัลย์สุดา กรกัน", school: "ห้วยผึ้งพิทยา" },
{ id: 31, name: "นางสาวณัฐฐาพร จันทพล", school: "อนุกูลนารี" },
{ id: 32, name: "นางสาวสุพิชชา ผึ้งทอง", school: "สุรนารีวิทยา" },
{ id: 33, name: "นางสาวดากาณดา ศิริแก้ว", school: "ขอนแก่นวิทยายน" },
{ id: 34, name: "นางสาวณัชชา บรรณมาส", school: "เบ็ญจะมะมหาราช" },
{ id: 35, name: "นางสาวจิดาภา มะหิพันธ์ุ", school: "มัญจาศึกษา" },
{ id: 36, name: "นางสาวนันท์ฉัตร รัตนพลวชิรวดี", school: "กัลยาณวัตร" },
{ id: 37, name: "นางสาวชนเนษฎ์ ชากิจดี", school: "สกลราชวิทยานุกูล" },
{ id: 38, name: "นางสาวแพรวา บุญมาก", school: "สิรินธร" },
{ id: 39, name: "นางสาวจารุวรรณ แสนทอง", school: "สุวรรณภูมิพิทยไพศาล" },
{ id: 40, name: "นายเทพพิทักษ์ ภูธรรศรี", school: "เลยพิทยาคม" },
{ id: 41, name: "นางสาวศรันย์รัชช์ มาตรวังแสง", school: "เตรียมอุดมศึกษาน้อมเกล้า นครราชสีมา" },
{ id: 42, name: "นางสาวภัทรวดี ไชยสักหาร", school: "ธาตุนารายณ์วิทยา" }
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
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(names.length / perPage)) {
        currentPage++;
        renderPage(currentPage);
    }
});

renderPage(currentPage);
