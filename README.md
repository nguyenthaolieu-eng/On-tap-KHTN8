# Website ôn tập KHTN lớp 8

Website tĩnh dùng HTML, CSS và JavaScript, có thể triển khai miễn phí bằng GitHub Pages.

## Tính năng hiện có
- Giao diện trang chủ theo phong cách dashboard, tương thích máy tính và điện thoại.
- Khu vực lý thuyết, Vật lí, Hóa học, Sinh học.
- Trắc nghiệm theo chủ đề, chấm điểm và giải thích đáp án.
- Thi thử tổng hợp 15 câu, giới hạn thời gian 20 phút.
- Theo dõi lượt làm, điểm cao nhất và lịch sử làm bài.
- Lưu tiến độ bằng `localStorage` trong trình duyệt của thiết bị hiện tại.
- Có chế độ giao diện tối.

## Lưu ý về dữ liệu
Các câu hỏi hiện tại là **bộ câu hỏi mẫu minh họa**, chưa bao phủ đầy đủ toàn bộ chương trình KHTN 8 theo sách *Kết nối tri thức với cuộc sống*. Giáo viên cần rà soát, bổ sung câu hỏi và nội dung theo kế hoạch dạy học thực tế trước khi dùng chính thức.

Tiến độ lưu trong trình duyệt của từng học sinh; dữ liệu không tự đồng bộ giữa thiết bị và không có hệ thống tài khoản/điểm danh tập trung.

## Chạy thử trên máy tính
1. Giải nén thư mục.
2. Mở `index.html` bằng trình duyệt Chrome hoặc Edge.
3. Không cần cài thêm thư viện.

## Đưa website lên mạng bằng GitHub Pages
1. Đăng nhập hoặc tạo tài khoản tại https://github.com/.
2. Nhấn **New repository** để tạo kho mã nguồn mới.
3. Đặt tên, ví dụ `on-tap-khtn8`, chọn **Public**, rồi tạo repository.
4. Tải lên 3 tệp `index.html`, `style.css`, `app.js` và tệp `README.md` (có thể tải cả thư mục bằng giao diện web hoặc GitHub Desktop).
5. Trong repository, vào **Settings → Pages**.
6. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
7. Chọn branch `main` và thư mục `/(root)`, sau đó nhấn **Save**.
8. Đợi GitHub hoàn tất triển khai. Đường link thường có dạng:
   `https://TEN-TAI-KHOAN.github.io/on-tap-khtn8/`
   Thay `TEN-TAI-KHOAN` bằng tên tài khoản GitHub thật của cô. Đây chỉ là mẫu đường dẫn; link chính thức chỉ hoạt động sau khi GitHub Pages triển khai thành công.
9. Mở link được hiển thị tại Settings → Pages để kiểm tra website.

## Cập nhật câu hỏi
Mở `app.js`, tìm mảng `const questions = [...]`. Mỗi câu có dạng:
```js
{
  id: "p6",
  subject: "Vật lí",
  topic: "Tên chủ đề",
  q: "Nội dung câu hỏi?",
  a: ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
  correct: 0,
  explain: "Giải thích đáp án đúng."
}
```
`correct: 0` là phương án A, `1` là B, `2` là C, `3` là D. Khi thêm câu hỏi vào chủ đề, cập nhật danh sách `ids` của chủ đề tương ứng trong đối tượng `topics`.

## Quyền riêng tư
Website công khai, ai có đường link đều có thể truy cập. Không đưa thông tin cá nhân nhạy cảm của học sinh vào mã nguồn. Vì tiến độ lưu ở trình duyệt, khi học sinh đổi thiết bị hoặc xóa dữ liệu trình duyệt thì tiến độ có thể mất.
