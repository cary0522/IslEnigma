
    document.addEventListener('DOMContentLoaded', function() {
        let mainSwitcher = document.getElementById('mainMusicSwitcher');
        let menuSwitcher = document.getElementById('menuMusicSwitcher');
        let music = document.getElementById('backgroundMusic');
        // 控制音樂開始與停止
        function toggleMusic(switcher) {
          const isActive = switcher.classList.toggle('active');
          music[isActive ? 'play' : 'pause']();
          [mainSwitcher, menuSwitcher].forEach(s => s.classList.toggle('active', isActive));
        }
        // 控制側拉選單的按鈕與主頁的switch可以互相控制
        [mainSwitcher, menuSwitcher].forEach(switcher => 
          switcher.addEventListener('click', e => {
            e.stopPropagation();
            toggleMusic(switcher);
          })
        );
         // 設置起始音量為 50%
        music.volume = 0.5;
{/* <!-- hamburger js--> */}
        let hamburgerBtn = document.getElementById('hamburgerBtn');
        let hamburgerMenu = document.getElementById('hamburgerMenu');
        let closeBtn = document.getElementById('closeBtn');
        //點擊後打開側邊選單(增加.open)
        hamburgerBtn.addEventListener('click', function() {
            hamburgerMenu.classList.add('open');
        });
        //點擊後關閉側邊選單(移除.open)
        closeBtn.addEventListener('click', function() {
            hamburgerMenu.classList.remove('open');
        });
{/* <!-- 控制中間按鈕(是否收起次要導覽列) js --> */}
        let toggleBtn = document.getElementById('toggleNavbar');
        let navbar = document.querySelector('.navbar');
        // 點擊後設置為hidden
        toggleBtn.addEventListener('click', function() {
            navbar.classList.toggle('hidden');
            this.classList.toggle('active');
            // 保存用戶的選擇
            if (navbar.classList.contains('hidden')) {
              localStorage.setItem('navbarHidden', 'true');
            } else {
              localStorage.setItem('navbarHidden', 'false');
            }
        });
        // 檢查用戶之前的選擇
        if (localStorage.getItem('navbarHidden') === 'true') {
            navbar.classList.add('hidden');
            toggleBtn.classList.add('active');
        }
    });
