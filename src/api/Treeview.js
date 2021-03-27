var jsondata = [
    { "id": "ajson1", "parentId": "#", "text": "Simple root node" },
    { "id": "ajson2", "parentId": "#", "text": "Root node 2" },
    { "id": "ajson3", "parentId": "ajson2", "text": "Child 1" },
    { "id": "ajson4", "parentId": "ajson2", "text": "Child 2" },
];

function generateData() {
    console.time('generateData');
    let data = [];
    function randomString() {
        return Math.random().toString(36).substr(2, 5).toUpperCase();
    }
    function randomParent(dataLength) {
        // return null;
        const rnd = Math.floor(Math.random() * dataLength * 0.9);
        if (rnd < 1) return null;
        return data[rnd].id;
    }
    for (let i = 0; i < numItems; i++) {
        const dataLength = data.length;
        const item = {
            id: i.toString(),
            name: randomString(),
            parent: randomParent(dataLength)
        }
        data.push(item);
    }
    console.timeEnd('generateData');
    return data;
}


const treedata=generateData();
export default treedata