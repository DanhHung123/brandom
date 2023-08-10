const tabRen = document.querySelector("#tabRen");
const btnTabs = document.querySelectorAll(".btnTab");

const arrTabContent = [
	`<div>
  <ul class="max-w-[450px] text-[18px]">
    <li class="mb-3">1. Tải ứng dụng miễn phí qua App store hoặc Google play store</li>
    <li class="mb-3">2. Đăng ký bằng số điện thoại, email hoặc sử dụng tài khoản khách</li>
    <li class="mb-3">3. Nhập mã xác thực tài khoản</li>
  </ul>
</div>
<div>
  <img class="object-cover block w-[350px] h-[250px] scale-[2.5]" src="./img/Untitled-1-01.png" alt="switch">
</div>`,
	`<div>
  <ul class="max-w-[450px] text-[18px]">
    <li class="mb-3">1. Điền thông tin số đo, dáng người của bạn</li>
    <li class="mb-3">2. Chọn phong cách, style mong muốn của bạn hoặc để Brandom trợ giúp</li>
    <li class="mb-3">3. Trò chuyện cùng chatbot để biết rõ hơn về thời trang</li>
  </ul>
</div>
<div>
  <img class="object-cover block w-[350px] h-[250px] scale-[2]" src="./img/Untitled-1-02.png" alt="switch">
</div>`,
	`<div>
  <ul class="max-w-[450px] text-[18px]">
    <li class="mb-3">1. Thoải mái lựa chọn các sản phẩm đa dạng dựa theo yêu cầu của bạn</li>
    <li class="mb-3">2. Chính sách đổi/trả hàng hợp lý</li>
    <li class="mb-3">3. Thanh toán an toàn, nhanh chóng</li>
  </ul>
</div>
<div>
  <img class="object-cover block w-[350px] h-[250px] scale-[2]" src="./img/Untitled-1-03.png" alt="switch">
</div>`,
];

if (tabRen) {
	btnTabs.forEach((item, index, arr) => {
		item.addEventListener("click", () => {
			tabRen.innerHTML = arrTabContent[index];
			arr.forEach((item) => {
				item.classList.remove("bg-primary");
				item.classList.add("bg-transparent");
			});
			item.classList.remove("bg-transparent");
			item.classList.add("bg-primary");
		});
	});
}

const btnMess = document.querySelector("#btnMess");
const messBox = document.querySelector("#messBox");
const btnCloseMess = document.querySelectorAll(".btnCloseMess");

if (btnMess && messBox) {
	btnMess.addEventListener("click", () => {
		messBox.classList.remove("invisible");
	});

	btnCloseMess.forEach((item) => {
		item.addEventListener("click", () => {
			messBox.classList.add("invisible");
		});
	});
}
