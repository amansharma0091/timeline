/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EditableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditableComponent = (function () {
                function EditableComponent() {
                    this.editableClass = "editable";
                    this.editFieldClass = "editableField";
                    this.editDisabled = true;
                }
                EditableComponent.prototype.editField = function (editableField) {
                    this.editDisabled = false;
                    this.editableClass = "editableActive";
                    editableField.focus();
                };
                EditableComponent.prototype.cancelEdit = function () {
                    this.editDisabled = true;
                    this.editableClass = "editable";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EditableComponent.prototype, "model", void 0);
                EditableComponent = __decorate([
                    core_1.Component({
                        selector: 'editable',
                        templateUrl: 'app/templates/editable.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditableComponent);
                return EditableComponent;
            }());
            exports_1("EditableComponent", EditableComponent);
        }
    }
});
//# sourceMappingURL=editable.component.js.map