# 00 - Key Takeaways

### Parent
- Là phần tử cha chứa phần tử hiện tại.
- Mỗi node chỉ có một parent.

### Child
- Là phần tử con nằm trực tiếp bên trong parent.
- Một parent có thể có nhiều child.

### Sibling
- Là các phần tử có cùng parent.
- Bao gồm:
  - `following-sibling`: phần tử anh em phía sau.
  - `preceding-sibling`: phần tử anh em phía trước.

### Ancestor
- Là tất cả các phần tử ở phía trên node hiện tại.
- Bao gồm parent và các cấp cao hơn.

### Descendant
- Là tất cả các phần tử nằm bên trong một node.
- Bao gồm child và các cấp sâu hơn.

### XPath thường dùng

- `parent::` => Chọn phần tử cha.
- `child::` => Chọn phần tử con.
- `ancestor::` => Chọn tổ tiên.
- `descendant::` => Chọn hậu duệ.
- `following-sibling::` => Chọn anh em phía sau.
- `preceding-sibling::` => Chọn anh em phía trước.

### Tổng kết

- Parent => Cha
- Child => Con
- Sibling => Cùng cha
- Ancestor => Tổ tiên
- Descendant => Hậu duệ