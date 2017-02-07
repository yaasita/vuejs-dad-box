var vm = new Vue({
    el: '#box-list',
    data: {
        draggingItem: undefined,
        boxes: [
            { name: 'a', sort_order: 1 },
            { name: 'b', sort_order: 2 },
            { name: 'c', sort_order: 3 },
            { name: 'd', sort_order: 4 },
            { name: 'e', sort_order: 5 },
            { name: 'f', sort_order: 6 },
            { name: 'g', sort_order: 7 }
        ]
    },
    methods: {
        dragstart: function (box,e) {
            this.draggingItem = box;
            e.target.style.opacity = 0.5;
        },
        dragend: function (e) {
            e.target.style.opacity = 1;
            //var request_url = "https://hogehogehoge"
            //var req = new XMLHttpRequest();
            //req.open('POST', request_url, false);
            //req.setRequestHeader("Content-Type", "application/json");
            //req.send(JSON.stringify(this.boxes));
        },
        dragenter: function (box) {
            const tempIndex = box.sort_order;
            box.sort_order = this.draggingItem.sort_order;
            this.draggingItem.sort_order = tempIndex;
        }
    },
    computed: {
        sortBoxes: function () {
            return _.orderBy(this.boxes, 'sort_order')
        }
    }
});
