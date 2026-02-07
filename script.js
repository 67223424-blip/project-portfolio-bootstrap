document.addEventListener('DOMContentLoaded', () => {
    // 1. ค้นหาปุ่ม Submit โดยใช้ Attribute selector
    const submitBtn = document.querySelector('button[type="submit"]');

    // 2. สร้างฟังก์ชันเมื่อมีการคลิกปุ่ม
    submitBtn.addEventListener('click', (e) => {
        // ป้องกันการทำงานปกติของปุ่ม (เช่น การรีเฟรชหน้า)
        e.preventDefault();

        // 3. ดึงค่าจาก Input ต่างๆ ตาม ID ที่ระบุใน HTML
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        // ดึงค่า (Value) ออกมาและตัดช่องว่างหัวท้าย (trim)
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // 4. ตรวจสอบความถูกต้องของข้อมูล (Validation)
        // ถ้าช่องไหนว่าง ให้แจ้งเตือน
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            return; // จบการทำงานฟังก์ชันทันที ไม่ไปต่อ
        }

        // ตรวจสอบรูปแบบอีเมลเบื้องต้น
        if (!validateEmail(email)) {
            alert('กรุณากรอกรูปแบบอีเมลให้ถูกต้อง (เช่น example@mail.com)');
            return;
        }

        // 5. จำลองการส่งข้อมูล (Simulation)
        // เนื่องจากเป็นเว็บ Static ไม่มีหลังบ้าน เราจะแสดง Alert ว่าส่งสำเร็จ
        
        // เปลี่ยนข้อความปุ่มเพื่อบอกสถานะกำลังส่ง
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'กำลังส่ง...';
        submitBtn.disabled = true;

        // จำลองเวลาส่ง 1.5 วินาที
        setTimeout(() => {
            // แสดงข้อความสำเร็จ
            alert(`ขอบคุณครับคุณ ${name}!\nข้อความเรื่อง "${subject}" ถูกส่งเรียบร้อยแล้ว\nเราจะติดต่อกลับไปที่ ${email} โดยเร็วที่สุด`);

            // 6. ล้างค่าในฟอร์ม (Reset Form)
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';

            // คืนค่าปุ่มกลับสู่สภาพเดิม
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

        }, 1500);
    });

    // ฟังก์ชันช่วยตรวจสอบรูปแบบอีเมล (Helper Function)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
