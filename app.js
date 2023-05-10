let listStudent = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];

let listMale = listStudent.filter(e => {
    if (e.gender === 'male') return e;
});

let listFemale = listStudent.filter(e => {
    if (e.gender === 'female') return e;
});

console.log(`Diem trung binh theo gioi tinh nam la ${listMale.reduce((sum, e) => sum + e.point, 0) / listMale.length}`);
console.log(`Diem trung binh theo gioi tinh nu la ${listFemale.reduce((sum, e) => sum + e.point, 0) / listFemale.length}`);