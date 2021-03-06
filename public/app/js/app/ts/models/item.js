/// <reference path="../../../../typings/tsd.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item(id, text, done, check_list_task_id) {
                    this.id = id;
                    this.text = text;
                    this.done = done;
                    this.check_list_task_id = check_list_task_id;
                }
                return Item;
            }());
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=item.js.map