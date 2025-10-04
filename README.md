# Web_producer

## 📝 프로젝트 소개

Web_producer 는 웹 표준 (HTML, CSS, JavaScript)을 활용하여 음악 프로듀서의 개인 작업물들을 게시하고 소개하는 웹 페이지를 제작한 프로젝트 입니다.

## 핵심 기능

- 네비게이션 바: 버튼 hover 시 반응하여 팝업되는 네비게이션 바를 배치했습니다.
  - 넓이 만큼 좌측으로 이동된 nav 배치로 숨김

```
nav {
  width: 18%;
  left: -18%;
  height: 100vh;
  transition: left 0.3s ease;
  z-index: 1000;
}
```

  - menu-icon hover 시 좌측으로 이동되었던 nav를 다시 옮겨 나타나게 하고 나타난 nav hover 시에도 유지

```
.menu-icon:hover+nav,
nav:hover {
  left: 0;
}
```

- 뮤직 카드: 각 음악 카드 hover 시 반투명해지며 텍스트가 나타나고 클릭 시 해당 음악 youtube 링크로 연결되는 카드를 제작했습니다.

  - 각 카드 링크 연결
  
  ```python
  document.getElementById('song1').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=b7I2JhoUEYA', '_blank');
  });
  document.getElementById('song2').addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=JYMYbnPgiX4', '_blank');
  });
  document.getElementById('song3').addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=0vV8qugPaYw', '_blank');
  });
  ```

- 모달 팝업: contact 버튼을 배치하고 클릭하면 이메일과 문의 내용을 입력할 수 있는 모달 팝업 창을 배치했습니다.

  - 각 버튼 클릭에 반응하는 스크립트 작성
  
  ```python
  document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const contactForm = document.getElementById("contactForm");
  const openModalBtn = document.getElementById("openModalBtn");

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    modal.style.display = "none";

    contactForm.reset();
  });
  });
  ```
