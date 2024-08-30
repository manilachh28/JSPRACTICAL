"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testcafe_1 = require("@testing-library/testcafe");
fixture('Getting Started')
    .page('https://www.google.co.in');
test('First testCafeTest', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.typeText(yield testcafe_1.screen.getByRole('textbox', { name: /search/i }), 'TestCafe Learnings');
    yield t.pressKey('enter');
    const resultpage = yield testcafe_1.screen.findByText(/TestCafe/);
}));
test('Second testCafeTest', (t) => __awaiter(void 0, void 0, void 0, function* () {
}));
