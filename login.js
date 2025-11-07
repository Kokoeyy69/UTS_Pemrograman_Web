(function() {
    const $ = sel => document.querySelector(sel);
    const form = $('#loginForm');
    const email = $('#email');
    const password = $('#password');
    const emailError = $('#emailError');
    const passwordError = $('#passwordError');
    const modalBackdrop = $('#modalBackdrop');
    const modalContent = $('#modalContent');
    const themeToggle = $('#themeToggle');

    // Tema awal
    let darkMode = true;
    const applyTheme = () => {
        if (darkMode) {
            document.body.style.background = "var(--bg-dark)";
            document.body.style.color = "var(--text-light)";
            $('.login-card').style.background = "var(--card-dark)";
            themeToggle.textContent = "☀️ Light";
        } else {
            document.body.style.background = "var(--bg-light)";
            document.body.style.color = "var(--text-dark)";
            $('.login-card').style.background = "var(--card-light)";
            themeToggle.textContent = "🌙 Dark";
        }
    };
    applyTheme();

    themeToggle.addEventListener("click", () => {
        darkMode = !darkMode;
        applyTheme();
    });

    // Jika user sudah login
    const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
    if (loggedUser) {
        window.location.href = "dashboard.html";
        return;
    }

    function showModal(html) {
        modalContent.innerHTML = html;
        modalBackdrop.style.display = "flex";
        modalBackdrop.setAttribute("aria-hidden", "false");
        modalContent.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", hideModal));
        const mform = modalContent.querySelector("form");
        if (mform) mform.addEventListener("submit", e => {
            e.preventDefault();
            if (mform.dataset.type === "forgot") handleForgot(mform);
            else handleRegister(mform);
        });
    }

    function hideModal() {
        modalBackdrop.style.display = "none";
        modalBackdrop.setAttribute("aria-hidden", "true");
        modalContent.innerHTML = "";
    }

    function handleForgot(formEl) {
        const em = formEl.querySelector('input[name="email"]').value.trim();
        if (!em) return alert("Masukkan email untuk reset password.");
        const u = (window.dataPengguna || []).find(x => x.email.toLowerCase() === em.toLowerCase());
        if (!u) return alert("Email tidak ditemukan.");
        alert("Instruksi reset password dikirim (simulasi).");
        hideModal();
    }

    function handleRegister(formEl) {
        const nama = formEl.querySelector('input[name="nama"]').value.trim();
        const em = formEl.querySelector('input[name="email"]').value.trim();
        const pw = formEl.querySelector('input[name="password"]').value.trim();
        if (!nama || !em || !pw) return alert("Isi semua kolom.");
        const exists = (window.dataPengguna || []).some(u => u.email.toLowerCase() === em.toLowerCase());
        if (exists) return alert("Email sudah terdaftar.");
        const newId = (window.dataPengguna.length ? Math.max(...window.dataPengguna.map(u => u.id)) + 1 : 1);
        window.dataPengguna.push({ id: newId, nama, email: em, password: pw, role: "User" });
        alert("Pendaftaran berhasil. Silakan login.");
        hideModal();
    }

    $('#btnForgot').addEventListener('click', () => showModal(forgotTemplate));
    $('#btnRegister').addEventListener('click', () => showModal(registerTemplate));
    modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) hideModal(); });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const em = email.value.trim();
        const pw = password.value;
        let valid = true;
        if (!em || !email.validity.valid) { emailError.style.display = 'block';
            valid = false; } else emailError.style.display = 'none';
        if (!pw || pw.length < 4) { passwordError.style.display = 'block';
            valid = false; } else passwordError.style.display = 'none';
        if (!valid) return;

        const users = window.dataPengguna || [];
        const matched = users.find(u => u.email.toLowerCase() === em.toLowerCase() && u.password === pw);
        if (!matched) return alert('Email atau password salah.');

        localStorage.setItem('userLogged', JSON.stringify({
            id: matched.id,
            nama: matched.nama,
            email: matched.email,
            role: matched.role
        }));

        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.add('active');
        document.body.style.opacity = '0.8';
        setTimeout(() => { document.body.style.opacity = '0'; }, 800);
        setTimeout(() => { window.location.href = 'dashboard.html'; }, 1800);
    });

    const forgotTemplate = `
    <div class="modal-header">
      <h2 id="modalTitle">Lupa Password</h2>
      <button class="close" data-close aria-label="Tutup">&times;</button>
    </div>
    <form data-type="forgot" novalidate>
      <label for="fp-email">Masukkan email Anda</label>
      <input id="fp-email" name="email" type="email" class="input" placeholder="nama@domain.com" required>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
        <button type="button" class="btn btn-outline" data-close>Batalkan</button>
        <button type="submit" class="btn btn-primary">Kirim Instruksi</button>
      </div>
    </form>
  `;

    const registerTemplate = `
    <div class="modal-header">
      <h2 id="modalTitle">Daftar Akun Baru</h2>
      <button class="close" data-close aria-label="Tutup">&times;</button>
    </div>
    <form data-type="register" novalidate>
      <label>Nama lengkap</label>
      <input name="nama" type="text" class="input" required>
      <label>Email</label>
      <input name="email" type="email" class="input" required>
      <label>Password</label>
      <input name="password" type="password" class="input" required minlength="4">
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
        <button type="button" class="btn btn-outline" data-close>Batalkan</button>
        <button type="submit" class="btn btn-primary">Daftar</button>
      </div>
    </form>
  `;
})();