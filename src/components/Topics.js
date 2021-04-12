import React from "react";
import "./search.css";
import Topicsresults from "./Topics-results";

function Topics() {
  return (
    <div class="all-topics">
      <div class="parent-topics">
        <div class="topics">
          <img
            src="https://cdn11.bigcommerce.com/s-a7x9o77ctx/images/stencil/original/carousel/37/mothers_day_2.jpg"
            alt="flowers"
          />
          <div class="text-on-topics">
            <h4>Flowers</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png"
            alt="animals"
          />
          <div class="text-on-topics">
            <h4>Animals</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/92/Colorful_spring_garden.jpg"
            alt="spring"
          />
          <div class="text-on-topics">
            <h4>Spring</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg"
            alt="women"
          />
          <div class="text-on-topics">
            <h4>Women</h4>
          </div>
        </div>
      </div>
      <div class="parent-topics">
        <div class="topics">
          <img
            src="https://img.freepik.com/photos-gratuite/beau-jeune-homme-t-shirt-blanc-poitrine-bras-croises-souriant-heureux_176420-21607.jpg?size=626&ext=jpg&ga=GA1.2.2029709535.1613347200"
            alt="men"
          />
          <div class="text-on-topics">
            <h4>Men</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://www.laligue.be/Files/media/497000/497290/shared/gettyimages-685864090/l.jpg"
            alt="children"
          />
          <div class="text-on-topics">
            <h4>Children</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://shop.intentsfestival.nl/wp-content/uploads/2020/05/canvas-Intents-Festival-2018-Mainstage.jpg"
            alt="festivals"
          />
          <div class="text-on-topics">
            <h4>Festivals</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://images.lanouvellerepublique.fr/image/upload/5b95be27be7744fb5c8b467b.jpg"
            alt="landscapes"
          />
          <div class="text-on-topics">
            <h4>Landscapes</h4>
          </div>
        </div>
      </div>
      <div class="parent-topics">
        <div class="topics">
          <img
            src="https://post.medicalnewstoday.com/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1.jpg"
            alt="moon"
          />
          <div class="text-on-topics">
            <h4>Moon</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://www.projectmeubilair.nl/wp-content/uploads/2019/10/atmosphere-cloudiness-clouds-844297.jpg"
            alt="sky"
          />
          <div class="text-on-topics">
            <h4>Sky</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://img2.onthesnow.com/image/la/53/top_20_des_vacances_d%C3%A9t%C3%A9_en_537949.jpg"
            alt="mountain"
          />
          <div class="text-on-topics">
            <h4>Mountain</h4>
          </div>
        </div>
        <div class="topics">
          <img
            src="https://storage.pubble.nl/648e3015/content/2020/3/54cb7949-e9c2-4a78-86c7-7b723bb2e734.jpg"
            alt="sport"
          />
          <div class="text-on-topics">
            <h4>Sport</h4>
          </div>
        </div>
      </div>
      <Topicsresults />
    </div>
  );
}

export default Topics;
