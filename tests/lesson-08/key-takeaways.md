# Playwright - Test Describe, Hooks và Assertions

## 1. test.describe()

### Mục đích
Dùng để nhóm các test case có liên quan với nhau.

### Cú pháp

ts
test.describe('Login Feature', () => {
    test('Login success', async ({ page }) => {
        // Test code
    });

    test('Login failed', async ({ page }) => {
        // Test code
    });
});

### Lợi ích
Nhóm các test cùng chức năng.
Dễ đọc report.
Có thể áp dụng hook riêng cho từng nhóm test.

---

## 2. Hooks

Hooks giúp thực hiện các thao tác chuẩn bị hoặc dọn dẹp trước/sau khi chạy test.

---

### beforeAll()

Chạy 1 lần duy nhất trước tất cả test trong describe.

ts
test.beforeAll(async () => {
    console.log('Run before all tests');
});

#### Thứ tự

text
beforeAll
test1
test2
test3

#### Use Case
Tạo dữ liệu test.
Login một lần.
Khởi tạo môi trường test.

---

### afterAll()

Chạy 1 lần duy nhất sau khi tất cả test hoàn thành.

ts
test.afterAll(async () => {
    console.log('Run after all tests');
});

#### Use Case
Xóa dữ liệu test.
Đóng kết nối database.
Cleanup môi trường.

---

### beforeEach()

Chạy trước mỗi test case.

ts
test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
});

#### Thứ tự

text
beforeEach
test1

beforeEach
test2

beforeEach
test3

#### Use Case
Truy cập URL.
Login lại mỗi test.
Reset trạng thái ứng dụng.

---

### afterEach()

Chạy sau mỗi test case.

ts
test.afterEach(async () => {
    console.log('Cleanup');
});

#### Use Case
Logout.
Xóa dữ liệu tạm.
Chụp log khi fail.

---

## 3. Thứ tự thực thi Hooks

ts
test.describe('Demo', () => {

    test.beforeAll(() => {});
    test.beforeEach(() => {});
    test.afterEach(() => {});
    test.afterAll(() => {});

    test('TC01', () => {});
    test('TC02', () => {});
});

### Thứ tự chạy

text
beforeAll

beforeEach
TC01
afterEach

beforeEach
TC02
afterEach

afterAll

---

# Assertions

Assertion dùng để kiểm tra kết quả thực tế có đúng như mong đợi hay không.

Import:

ts
import { test, expect } from '@playwright/test';

---

## 4. Generic Assertions

Dùng để kiểm tra giá trị thông thường (string, number, object, array...).

### toBe()

So sánh tuyệt đối.

ts
expect(2 + 2).toBe(4);

---

### toEqual()

So sánh object hoặc array.

ts
expect({
    name: 'William'
}).toEqual({
    name: 'William'
});

---

### toContain()

Kiểm tra phần tử tồn tại.

ts
expect(['A', 'B', 'C']).toContain('A');

---

### toContainEqual()

Kiểm tra object tồn tại trong array.

ts
expect([
    { id: 1 }
]).toContainEqual({
    id: 1
});

---

### toBeTruthy()

Kiểm tra giá trị truthy.

ts
expect('Hello').toBeTruthy();

---

### toBeFalsy()

Kiểm tra giá trị falsy.

ts
expect('').toBeFalsy();

---

### toBeNull()

ts
expect(null).toBeNull();

---

### toBeUndefined()

ts
expect(undefined).toBeUndefined();

---

### toBeGreaterThan()

ts
expect(10).toBeGreaterThan(5);

---

### toBeLessThan()

ts
expect(5).toBeLessThan(10);

---

### toHaveLength()

ts
expect([1, 2, 3]).toHaveLength(3);

---

# 5. Web-First Assertions

Dùng để kiểm tra các phần tử trên UI.

Playwright sẽ tự động chờ (Auto Wait).

---

## toBeVisible()

Kiểm tra element hiển thị.

ts
await expect(page.locator('#username')).toBeVisible();

---

## toBeHidden()

Kiểm tra element bị ẩn.

ts
await expect(page.locator('#loading')).toBeHidden();

---

## toBeEnabled()

Kiểm tra element có thể thao tác.

ts
await expect(page.locator('#submit')).toBeEnabled();

---

## toBeDisabled()

Kiểm tra element bị disable.

ts
await expect(page.locator('#submit')).toBeDisabled();

---

## toBeChecked()

Kiểm tra checkbox/radio được chọn.

ts
await expect(page.locator('#male')).toBeChecked();

---

## toHaveText()

Kiểm tra text chính xác.

ts
await expect(
    page.locator('h1')
).toHaveText('User Registration');

---

## toContainText()

Kiểm tra text chứa giá trị.

ts
await expect(
    page.locator('h1')
).toContainText('Registration');

---

## toHaveValue()

Kiểm tra giá trị input.

ts
await expect(
    page.locator('#email')
).toHaveValue('admin@gmail.com');

---

## toHaveAttribute()

Kiểm tra attribute.

ts
await expect(
    page.locator('#email')
).toHaveAttribute('type', 'email');

---

## toHaveClass()

Kiểm tra class.

ts
await expect(
    page.locator('.btn')
).toHaveClass('btn btn-primary');

---

## toHaveCount()

Kiểm tra số lượng phần tử.

ts
await expect(
    page.locator('li')
).toHaveCount(5);

---

## toHaveURL()

Kiểm tra URL hiện tại.

ts
await expect(page).toHaveURL(
    'https://example.com/dashboard'
);

---

## toHaveTitle()

Kiểm tra title trang.

ts
await expect(page).toHaveTitle(
    'Dashboard'
);

---

# So sánh Generic Assertion và Web-First Assertion

| Generic Assertion | Web-First Assertion |
|-------------------|---------------------|
| Dùng cho dữ liệu | Dùng cho UI |
| Không auto wait | Có auto wait |
| Chạy ngay lập tức | Chờ element xuất hiện |
| expect(value) | expect(locator) |
| Đồng bộ dữ liệu | Kiểm tra giao diện |

### Generic

ts
expect(total).toBe(100);

### Web-First

ts
await expect(
    page.locator('#total')
).toHaveText('100');

---

# Lưu Ý:

test.describe() => Nhóm test.
beforeAll() => Chạy 1 lần trước tất cả test.
afterAll() => Chạy 1 lần sau tất cả test.
beforeEach() => Chạy trước mỗi test.
afterEach() => Chạy sau mỗi test.
Generic Assertion => Kiểm tra dữ liệu.
Web-First Assertion => Kiểm tra UI và có Auto Wait.
Luôn ưu tiên Web-First Assertion khi kiểm tra giao diện.