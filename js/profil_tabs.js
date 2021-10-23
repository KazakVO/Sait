document.addEventListener('DOMContentLoaded', function () {
  
  //Пользуемся методом объекта document.
  //querySelectorAll - метод. Позволяет передовать селекторы в формате css и получать DOM элементы, которые соответствуют данным селекторам.
  document.querySelectorAll('.profil_left__news_dif_btn').forEach(function (tabsLink) {
    //addEventListener - метод, который позволяет вызывать функцию, при появлении какого-нибудь события
    tabsLink.addEventListener('click', function (event) {
      //Значение переменной path берется из события клика
      //currentTarget - html элемент в который был совершен клик
      //dataset - набор data атрибутов. Атрибуты, которые начинаются в html с "data-", попатают в специальный объект dataset
      const path = event.currentTarget.dataset.path

      //выбираем все эл-ты с классом .tab-content
      document.querySelectorAll('.news__post_profil_container').forEach(function (tabContent) {
        //у каждого таба удаляем класс tab-content-active
        tabContent.classList.remove('news__post_profil_container_active')
      })
      //после этого у нас нет ни одного активного таба, и нам нужно показать тот, который хотел пользователь при клике. Выбираем html элемент по атрибуту, на это указывают []. Атрибут data-target должен быть равен значению {path}
      document.querySelector(`[data-target="${path}"]`).classList.add('news__post_profil_container_active')
    })
  })

  document.getElementById('botton1').onclick = function(){
    document.getElementById('botton2').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton3').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton1').classList.add('dark_blue_border_bottom')
  }

  document.getElementById('botton2').onclick = function(){
    document.getElementById('botton1').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton3').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton2').classList.add('dark_blue_border_bottom')
  }

  document.getElementById('botton3').onclick = function(){
    document.getElementById('botton1').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton2').classList.remove('dark_blue_border_bottom')
    document.getElementById('botton3').classList.add('dark_blue_border_bottom')
  }

  document.getElementById('profil_left__btn').onclick = function(){
    document.getElementById('profil_left_dop_infa').classList.toggle('profil_left_dop_infa_active')
  }
}) 