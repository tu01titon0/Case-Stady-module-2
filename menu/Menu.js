"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.mainMenu = function () {
        console.log('\n  Chào mừng đến với hệ thống quản lý sinh viên');
        console.log('[1] Hiển thị danh sinh viên sinh viên: \n[2] Tìm kiếm  sinh viên theo tên sinh viên: \n[3] Thêm mới một  sinh viên\n[4] Chỉnh sửa thông tin một sinh viên: \n[5] Xóa  sinh viên\n[0] Thoát chương trình');
    };
    Menu.menuEdit = function () {
        console.log('\n [1] Edit Name: \n[2] Edit Class\n[3] Edit Address\n[4] Edit Score: \n[5] Edit Hobby\n[0] Bạck');
    };
    return Menu;
}());
exports.Menu = Menu;
