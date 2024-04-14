

let linux = [
    {id:1, cpu: 'i5', ram: '8gb', hdd: '500gb'},
    {id:2, cpu: 'i9', ram: '32gb', hdd: '2tb'},
    {id:3, cpu: 'i7', ram: '16gb', hdd: '1tb'},
];


let found = linux.find(e => e.cpu === 'i7')

console.log(found);