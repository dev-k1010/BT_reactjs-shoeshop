/* rootReducer quản lí reducer con được tạo ra từ hàm "combineReducer"
=> reducer con nhận từ shoe.js
=> Đẩy lên store tổng ở index.js
*/
import { combineReducers } from "redux";
import { shoeReducer } from "./shoe";

export let rootReducer = combineReducers({ shoeReducer: shoeReducer });
