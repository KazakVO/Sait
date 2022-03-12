{/* <div class="news__post light_yellow">
<div class="news__post_flex">
    <div class="news__post_blok">
        <div>
            <img class="news__post_ava" src="img/123.png" alt="">
        </div>
    </div>
    <div>
        <div class="news__post_gryp_name">
            Группа
        </div>
        <div class="news__post_gryp_time">
            4:20
        </div>
    </div>
</div>
<div class="news__post_p">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit non dolor mollitia f f f f f  g g g g g repellendus
    quo enim, fugiat voluptates? Enim deleniti unde assumenda eum excepturi. Doloremque delectus
    expedita numquam eum voluptatum aliquam.
</div>
<div class="news__post_lkr">
    <!-- Лайки -->
    <div class="news__post_l">
        <button id="3_newsPostLike1" class="news__post_l_img" onclick="LikePlus('3_newsPostLike1', '3_newsPostLike2', '3_likeAll')">
            <i class="fa fa-heart-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
        </button>
        <button id="3_newsPostLike2" class="news__post_l_img heart_none" onclick="LikeMinus('3_newsPostLike1', '3_newsPostLike2', '3_likeAll')">
            <i class="fa fa-heart color_dark_dark_yellow heart_none fa-2x" aria-hidden="true"></i>
        </button>
        <div id="3_likeAll" class="news__col_like_all">46</div>
        <div class="news__col_like_ally">36</div>
        <div class="news__col_like_enemy">12</div>
    </div>
    <!-- Репосты -->
    <div class="news__post_r">
        <button class="news__post_r_img">
            <i class="fa fa-arrow-circle-o-right color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
        </button>
        <div id="3_news_rep_all" class="news__col_rep_all dark_dark_yellow_border_bottom_hover" onclick="ShowReps('3_news_repost')">746</div>
        <div class="news__col_rep_ally">36</div>
        <div class="news__col_rep_enemy">12</div>
    </div>
    <!-- Появляющийся список репостнувших -->
        <div id="3_news_repost" class="news_circle__tooltop background-color_dark_dark_yellow">
          <div class="news_circle__tooltip_title">Список репостов 3</div>
          <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
            <div class="news_circle__tooltip_r_c_l">
              <a class="news_circle__ava_link" href="">
                <img class="news_circle__link_img" src="img/артем.jpg" alt="">
              </a>
            </div>
            <div class="news_circle__name_polit">
              <a class="news_circle__name_link" href="">ййййййШашлычков Герман</a>
              <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
            </div>
          </div>
          <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
            <div class="news_circle__tooltip_r_c_l">
              <a class="news_circle__ava_link" href="">
                <img class="news_circle__link_img" src="img/артем.jpg" alt="">
              </a>
            </div>
            <div class="news_circle__name_polit">
              <a class="news_circle__name_link" href="">Шашлычков Германия</a>
              <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
            </div>
          </div>
          <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
            <div class="news_circle__tooltip_r_c_l">
              <a class="news_circle__ava_link" href="">
                <img class="news_circle__link_img" src="img/артем.jpg" alt="">
              </a>
            </div>
            <div class="news_circle__name_polit">
              <a class="news_circle__name_link" href="">Шашлычков Герман</a>
              <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
            </div>
          </div>
          <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
            <div class="news_circle__tooltip_r_c_l">
              <a class="news_circle__ava_link" href="">
                <img class="news_circle__link_img" src="img/артем.jpg" alt="">
              </a>
            </div>
            <div class="news_circle__name_polit">
              <a class="news_circle__name_link" href="">Шашлычков Герман</a>
              <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
            </div>
          </div>
          <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
            <div class="news_circle__tooltip_r_c_l">
              <a class="news_circle__ava_link" href="">
                <img class="news_circle__link_img" src="img/артем.jpg" alt="">
              </a>
            </div>
            <div class="news_circle__name_polit">
              <a class="news_circle__name_link" href="">Шашлычков Герман</a>
              <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
            </div>
          </div>
          <div class="news_circle__tooltip_link_c">
            <a class="news_circle__tooltip_link mid_yellow_border_bottom_hover" href="">А можно всех посмотреть?</a>
          </div>
      </div>
      <!-- Комментарии -->
      <div class="news__post_c">
          <button class="news__post_c_img">
            <i class="fa fa-comments-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
          </button>
          <div class="news__col_com_all">57</div>
          <div class="news__col_com_ally">257</div>
          <div class="news__col_com_enemy">57</div>
      </div>
      <!-- Добавление комментария onclick="f()" -->
    <div class="news__post_k">
        <button class="news__post_k_img" type="button"   onclick="fun__but('3_comentadd')">
            <i class="fa fa-commenting-o fa-2x color_dark_dark_yellow" aria-hidden="true"></i>
        </button>
    </div>
    <div class="news__post_r">
    </div>
</div>
<div id="3_comentadd" style="display: none">
    <div class="my_pad light_yellow">
        <div class="news__post_flex">
            <div class="news__post_blok">
                <div>
                    <img class="news__post_ava" src="img/123.png" alt="">
                </div>
            </div>
            <div>
                <div class="news__post_gryp_name">
                    Группа
                </div>
                <div class="news__post_gryp_time">
                    4:20
                </div>
            </div>
        </div>
        <form>
            <div>
                <textarea cols="50" rows="10" class="forinput_or_textarea light_yellow"
                    placeholder="Что у вас нового?"></textarea>
            </div>
            <div class="div_btn">
                <button type="submit" onclick="fun__but('3_comentadd')"
                    class="btn btn-default my_btn_yellow light_yellow dark_yellow">Выложить</button>
            </div>
        </form>
    </div>
</div>

</div>
<div class="news__post light_yellow">
<div class="news__post_flex">
  <div class="news__post_blok">
      <div>
          <img class="news__post_ava" src="img/123.png" alt="">
      </div>
  </div>
  <div>
      <div class="news__post_gryp_name">
          Группа
      </div>
      <div class="news__post_gryp_time">
          4:20
      </div>
  </div>
</div>
<div class="news__post_p">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit non dolor mollitia f f f f f  g g g g g repellendus
  quo enim, fugiat voluptates? Enim deleniti unde assumenda eum excepturi. Doloremque delectus
  expedita numquam eum voluptatum aliquam.
</div>
<div class="news__post_lkr">
  <!-- Лайки -->
  <div class="news__post_l">
      <button id="4_newsPostLike1" class="news__post_l_img" onclick="LikePlus('4_newsPostLike1', '4_newsPostLike2', '4_likeAll')">
          <i class="fa fa-heart-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
      </button>
      <button id="4_newsPostLike2" class="news__post_l_img heart_none" onclick="LikeMinus('4_newsPostLike1', '4_newsPostLike2', '4_likeAll')">
          <i class="fa fa-heart color_dark_dark_yellow heart_none fa-2x" aria-hidden="true"></i>
      </button>
      <div id="4_likeAll" class="news__col_like_all">46</div>
      <div class="news__col_like_ally">36</div>
      <div class="news__col_like_enemy">12</div>
  </div>
  <!-- Репосты -->
  <div class="news__post_r">
      <button class="news__post_r_img">
          <i class="fa fa-arrow-circle-o-right color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
      </button>
      <div id="4_news_rep_all" class="news__col_rep_all dark_dark_yellow_border_bottom_hover" onclick="ShowReps('4_news_repost')">746</div>
      <div class="news__col_rep_ally">36</div>
      <div class="news__col_rep_enemy">12</div>
  </div>
  <!-- Появляющийся список репостнувших -->
      <div id="4_news_repost" class="news_circle__tooltop background-color_dark_dark_yellow">
        <div class="news_circle__tooltip_title">Список репостов 4</div>
        <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
          <div class="news_circle__tooltip_r_c_l">
            <a class="news_circle__ava_link" href="">
              <img class="news_circle__link_img" src="img/артем.jpg" alt="">
            </a>
          </div>
          <div class="news_circle__name_polit">
            <a class="news_circle__name_link" href="">ййййййШашлычков Герман</a>
            <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
          </div>
        </div>
        <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
          <div class="news_circle__tooltip_r_c_l">
            <a class="news_circle__ava_link" href="">
              <img class="news_circle__link_img" src="img/артем.jpg" alt="">
            </a>
          </div>
          <div class="news_circle__name_polit">
            <a class="news_circle__name_link" href="">Шашлычков Германия</a>
            <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
          </div>
        </div>
        <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
          <div class="news_circle__tooltip_r_c_l">
            <a class="news_circle__ava_link" href="">
              <img class="news_circle__link_img" src="img/артем.jpg" alt="">
            </a>
          </div>
          <div class="news_circle__name_polit">
            <a class="news_circle__name_link" href="">Шашлычков Герман</a>
            <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
          </div>
        </div>
        <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
          <div class="news_circle__tooltip_r_c_l">
            <a class="news_circle__ava_link" href="">
              <img class="news_circle__link_img" src="img/артем.jpg" alt="">
            </a>
          </div>
          <div class="news_circle__name_polit">
            <a class="news_circle__name_link" href="">Шашлычков Герман</a>
            <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
          </div>
        </div>
        <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
          <div class="news_circle__tooltip_r_c_l">
            <a class="news_circle__ava_link" href="">
              <img class="news_circle__link_img" src="img/артем.jpg" alt="">
            </a>
          </div>
          <div class="news_circle__name_polit">
            <a class="news_circle__name_link" href="">Шашлычков Герман</a>
            <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
          </div>
        </div>
        <div class="news_circle__tooltip_link_c">
          <a class="news_circle__tooltip_link mid_yellow_border_bottom_hover" href="">А можно всех посмотреть?</a>
        </div>
    </div>
    <!-- Комментарии -->
    <div class="news__post_c">
        <button class="news__post_c_img">
          <i class="fa fa-comments-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
        </button>
        <div class="news__col_com_all">57</div>
        <div class="news__col_com_ally">257</div>
        <div class="news__col_com_enemy">57</div>
    </div>
    <!-- Добавление комментария onclick="f()" -->
  <div class="news__post_k">
      <button class="news__post_k_img" type="button"   onclick="fun__but('4_comentadd')">
          <i class="fa fa-commenting-o fa-2x color_dark_dark_yellow" aria-hidden="true"></i>
      </button>
  </div>
  <div class="news__post_r">
  </div>
</div>
<div id="4_comentadd" style="display: none">
  <div class="my_pad light_yellow">
      <div class="news__post_flex">
          <div class="news__post_blok">
              <div>
                  <img class="news__post_ava" src="img/123.png" alt="">
              </div>
          </div>
          <div>
              <div class="news__post_gryp_name">
                  Группа
              </div>
              <div class="news__post_gryp_time">
                  4:20
              </div>
          </div>
      </div>
      <form>
          <div>
              <textarea cols="50" rows="10" class="forinput_or_textarea light_yellow"
                  placeholder="Что у вас нового?"></textarea>
          </div>
          <div class="div_btn">
              <button type="submit" onclick="fun__but('4_comentadd')"
                  class="btn btn-default my_btn_yellow light_yellow dark_yellow">Выложить</button>
          </div>
      </form>
  </div>
</div>

</div>
<div class="news__post light_yellow">
  <div class="news__post_flex">
      <div class="news__post_blok">
          <div>
              <img class="news__post_ava" src="img/123.png" alt="">
          </div>
      </div>
      <div>
          <div class="news__post_gryp_name">
              Группа
          </div>
          <div class="news__post_gryp_time">
              4:20
          </div>
      </div>
  </div>
  <div class="news__post_p">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit non dolor mollitia f f f f f  g g g g g repellendus
      quo enim, fugiat voluptates? Enim deleniti unde assumenda eum excepturi. Doloremque delectus
      expedita numquam eum voluptatum aliquam.
  </div>
  <div class="news__post_lkr">
      <!-- Лайки -->
      <div class="news__post_l">
          <button id="5_newsPostLike1" class="news__post_l_img" onclick="LikePlus('5_newsPostLike1', '5_newsPostLike2', '5_likeAll')">
              <i class="fa fa-heart-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
          </button>
          <button id="5_newsPostLike2" class="news__post_l_img heart_none" onclick="LikeMinus('5_newsPostLike1', '5_newsPostLike2', '5_likeAll')">
              <i class="fa fa-heart color_dark_dark_yellow heart_none fa-2x" aria-hidden="true"></i>
          </button>
          <div id="5_likeAll" class="news__col_like_all">46</div>
          <div class="news__col_like_ally">36</div>
          <div class="news__col_like_enemy">12</div>
      </div>
      <!-- Репосты -->
      <div class="news__post_r">
          <button class="news__post_r_img">
              <i class="fa fa-arrow-circle-o-right color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
          </button>
          <div id="5_news_rep_all" class="news__col_rep_all dark_dark_yellow_border_bottom_hover" onclick="ShowReps('5_news_repost')">746</div>
          <div class="news__col_rep_ally">36</div>
          <div class="news__col_rep_enemy">12</div>
      </div>
      <!-- Появляющийся список репостнувших -->
          <div id="5_news_repost" class="news_circle__tooltop background-color_dark_dark_yellow">
            <div class="news_circle__tooltip_title">Список репостов 5</div>
            <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
              <div class="news_circle__tooltip_r_c_l">
                <a class="news_circle__ava_link" href="">
                  <img class="news_circle__link_img" src="img/артем.jpg" alt="">
                </a>
              </div>
              <div class="news_circle__name_polit">
                <a class="news_circle__name_link" href="">ййййййШашлычков Герман</a>
                <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
              </div>
            </div>
            <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
              <div class="news_circle__tooltip_r_c_l">
                <a class="news_circle__ava_link" href="">
                  <img class="news_circle__link_img" src="img/артем.jpg" alt="">
                </a>
              </div>
              <div class="news_circle__name_polit">
                <a class="news_circle__name_link" href="">Шашлычков Германия</a>
                <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
              </div>
            </div>
            <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
              <div class="news_circle__tooltip_r_c_l">
                <a class="news_circle__ava_link" href="">
                  <img class="news_circle__link_img" src="img/артем.jpg" alt="">
                </a>
              </div>
              <div class="news_circle__name_polit">
                <a class="news_circle__name_link" href="">Шашлычков Герман</a>
                <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
              </div>
            </div>
            <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
              <div class="news_circle__tooltip_r_c_l">
                <a class="news_circle__ava_link" href="">
                  <img class="news_circle__link_img" src="img/артем.jpg" alt="">
                </a>
              </div>
              <div class="news_circle__name_polit">
                <a class="news_circle__name_link" href="">Шашлычков Герман</a>
                <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
              </div>
            </div>
            <div class="news_circle__tooltip_comtainer mid_yellow_border_bottom_hover">
              <div class="news_circle__tooltip_r_c_l">
                <a class="news_circle__ava_link" href="">
                  <img class="news_circle__link_img" src="img/артем.jpg" alt="">
                </a>
              </div>
              <div class="news_circle__name_polit">
                <a class="news_circle__name_link" href="">Шашлычков Герман</a>
                <img class="news_circle__polit_img" src="img/намаз.jpg" alt="">
              </div>
            </div>
            <div class="news_circle__tooltip_link_c">
              <a class="news_circle__tooltip_link mid_yellow_border_bottom_hover" href="">А можно всех посмотреть?</a>
            </div>
        </div>
        <!-- Комментарии -->
        <div class="news__post_c">
            <button class="news__post_c_img">
              <i class="fa fa-comments-o color_dark_dark_yellow fa-2x" aria-hidden="true"></i>
            </button>
            <div class="news__col_com_all">57</div>
            <div class="news__col_com_ally">257</div>
            <div class="news__col_com_enemy">57</div>
        </div>
        <!-- Добавление комментария onclick="f()" -->
      <div class="news__post_k">
          <button class="news__post_k_img" type="button"   onclick="fun__but('5_comentadd')">
              <i class="fa fa-commenting-o fa-2x color_dark_dark_yellow" aria-hidden="true"></i>
          </button>
      </div>
      <div class="news__post_r">
      </div>
  </div>
  <div id="5_comentadd" style="display: none">
      <div class="my_pad light_yellow">
          <div class="news__post_flex">
              <div class="news__post_blok">
                  <div>
                      <img class="news__post_ava" src="img/123.png" alt="">
                  </div>
              </div>
              <div>
                  <div class="news__post_gryp_name">
                      Группа
                  </div>
                  <div class="news__post_gryp_time">
                      4:20
                  </div>
              </div>
          </div>
          <form>
              <div>
                  <textarea cols="50" rows="10" class="forinput_or_textarea light_yellow"
                      placeholder="Что у вас нового?"></textarea>
              </div>
              <div class="div_btn">
                  <button type="submit" onclick="fun__but('5_comentadd')"
                      class="btn btn-default my_btn_yellow light_yellow dark_yellow">Выложить</button>
              </div>
          </form>
      </div>
  </div>
  
</div> */}