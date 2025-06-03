import React from "react";
import { Link } from "react-router-dom";
import "../style.css"; 
import Footer from "../components/footer/footer";
import NavMenu from "../components/nav-menu/nav-menu"; 
export default function HomePage() {
  return (
    <>
  <NavMenu/>

      <main>
        <article id="text">
          <section id="box2">
            <h1>
              Development<br />of social projects starts here
            </h1>
            <p>
              Ми будуємо соціальну країну, де кожен має можливість впливати на зміни.
              Від звичайних громадян до громадських об'єднань — ваші соціальні ініціативи заслуговують
              на увагу та підтримку. Разом ми гуртуємося задля підтримки соціальних ідей, надаючи
              необхідні ресурси для їх реалізації. Кожна ваша ініціатива може стати ключем до важливих
              змін, вносячи вклад у побудову європейської України.
            </p>
          </section>
        </article>
      </main>
      <Footer/>
      
    </>
  );
}
