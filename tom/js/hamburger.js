export function navMenu() {
    // <nav>要素を作成
    const nav = document.createElement("nav");
    nav.id = "g-nav"; // 初期状態で画面外（右）に隠れている
    nav.style.display = "none"; // 初期状態で非表示

    // <ul>要素を作成
    const ul = document.createElement("ul");

    // リンクのデータを配列で準備
    const links = [
        { href: "index.html", text: "Home" },
        { href: "policy.html", text: "治療方針・流れ" },
        { href: "stuff.html", text: "スタッフ紹介" },
        { href: "subject.html", text: "診療科目" },
        { href: "#", text: "交通・アクセス" }
    ];

    // 配列をループして<li>要素と<a>要素を作成
    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // クローズボタンを作成
    const closeButton = document.createElement("img");
    closeButton.id = "closeButton";
    closeButton.setAttribute('src', 'img/closeButton.svg');

    // クローズボタンのクリックイベント
    closeButton.addEventListener("click", function () {
        nav.classList.remove("show"); // メニューを閉じる
    });

    // <ul>とクローズボタンを<nav>に追加
    nav.appendChild(closeButton);
    nav.appendChild(ul);

    // 作成した<nav>を#navMenuに追加
    const navMenuContainer = document.getElementById("navMenu");
    if (navMenuContainer) {
        navMenuContainer.appendChild(nav);
        nav.style.display = "flex"; // ナビゲーションを表示
    }
}

export function hamburgerMenu() {
    // ハンバーガーメニューの要素を作成
    const hamburger = document.createElement("div");
    hamburger.classList.add('hamburger');

    // ハンバーガーメニューの画像要素を作成
    const hamburgerImage = document.createElement("img");
    hamburgerImage.setAttribute('src', 'img/hambargerButton.svg');

    // hamburger要素に画像を追加
    hamburger.appendChild(hamburgerImage);

    // ハンバーガーアイコンのクリックイベント
    hamburger.addEventListener("click", function () {
        // #g-navを取得して表示
        const navMenu = document.getElementById("g-nav");
        if (navMenu) {
            navMenu.classList.add("show"); // メニューを右から表示
        }
    });

    // #hambargerMenuの要素を取得し、そこにハンバーガー要素を追加
    const menuContainer = document.getElementById("hambargerMenu");
    if (menuContainer) {
        menuContainer.appendChild(hamburger);
    }
}
