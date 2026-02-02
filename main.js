document.getElementById("myform").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع إعادة تحميل الصفحة

  // جلب البيانات
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // رقم واتسابك (مع كود الدولة)
  let whatsappNumber = "201002776136"; // غير الرقم برقمك

  // تكوين الرسالة
  let text = 
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  // رابط واتساب
  let url = `https://wa.me/${whatsappNumber}?text=${text}`;

  // فتح واتساب في نافذة جديدة
  window.open(url, "_blank");
});